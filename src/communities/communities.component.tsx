import React from "react";
import { sortCommunitiesByName } from "../utils/app.utils";
import "./communities.css";
import { ICommunities } from "./communities.props.interface";
import Community from "./community/community.component";

/**
 * Renders the communities and relevant details
 */
const Communities: React.FunctionComponent<ICommunities> = (props) => {
  const { communities, houses } = props;
  const sortedCommunities = sortCommunitiesByName(communities);

  return (
    <div className="communities-container">
      {!communities.length && <h3>No Communities to Display</h3>}
      {!!communities.length && sortedCommunities.map((c) => <Community community={c} houses={houses} />)}
    </div>
  );
};

export default Communities;
