import React, { useEffect, useState } from "react";
import { fetchData } from "./App.actions";
import "./app.css";
import Communities from "../communities/communities.component";
import { Community, House } from "../communities/communities.props.interface";
import Header from "../header/header.component";
import Progress from "react-svg-progress";

function App() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [getCommunitiesPending, setGetCommunitiesPending] = useState(false);
  const [getHousesPending, setGetHousesPending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchData(setGetCommunitiesPending, setCommunities, setError, "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities");
    fetchData(setGetHousesPending, setHouses, (error) => console.log(error), "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes");
  }, []);

  return (
    <div className="App">
      <Header />
      {error && (
        <div data-name="error" className="error-notification">
          {error}
        </div>
      )}
      {getCommunitiesPending && <Progress color="#223e6d" size="30px" />}
      {!getCommunitiesPending && !!communities.length && <Communities communities={communities} houses={houses} />}
    </div>
  );
}

export default App;