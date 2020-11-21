import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { calculateAvgPrice, calculateHousesInCommunity } from "../../utils/app.utils";
import "./community.css";
import { ICommunity } from "./community.props.interface";

/**
 * Renders a single community and its relevant details.
 */
const Community: React.FunctionComponent<ICommunity> = (props) => {
  const [noImage, setNoImage] = useState<boolean>(false);
  const { community, houses } = props;
  const brokenSource = () => {
    setNoImage(true);
  };
  const avgPrice = calculateAvgPrice(props.community.id, houses);
  const housesInCommunity = calculateHousesInCommunity(props.community.id, houses);

  return (
    <div key={community.id} className="community-container">
      {!noImage ? <img className="community-image" src={community.imgUrl} onError={brokenSource} alt="community"></img> : <div className="image-placeholder" />}
      <div className="community-details">
        <span className="community-name" title={community.name}>
          {community.name}
        </span>
        <div className="price-houses-container">
          <span className="community-price">Avg. Price: {avgPrice ? `$${avgPrice}` : "NA"}</span>
          <span>
            <FontAwesomeIcon icon={faHome} className="house-icon" />
            <span className="houses-amount">{housesInCommunity || "None Found"}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Community;
