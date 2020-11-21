import React, { useEffect, useState } from "react";
import { fetchData } from "./app.actions";
import "./app.css";
import Communities from "../communities/communities.component";
import { Community, House } from "../communities/communities.props.interface";
import Header from "../header/header.component";
import Progress from "react-svg-progress";

/**
 * Renders the root component for the application.
 */
function App() {
  const [communities, setCommunities] = useState<Community[]>([]);
  const [houses, setHouses] = useState<House[]>([]);
  const [getCommunitiesPending, setGetCommunitiesPending] = useState<boolean>(false);
  const [getHousesPending, setGetHousesPending] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const loading = getCommunitiesPending || getHousesPending;

  useEffect(() => {
    fetchData(setGetCommunitiesPending, setCommunities, setError, "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/communities");
    fetchData(setGetHousesPending, setHouses, (error) => console.log(error), "https://a18fda49-215e-47d1-9dc6-c6136a04a33a.mock.pstmn.io/homes");
  }, []);

  return (
    <div className="app-container">
      <Header />
      {error && (
        <div data-name="error" className="error-notification">
          {error}
        </div>
      )}
      {loading && <Progress color="#223e6d" size="30px" />}
      {!loading && !!communities.length && <Communities communities={communities} houses={houses} />}
    </div>
  );
}

export default App;
