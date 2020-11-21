import { Community, House } from "../communities/communities.props.interface";

/**
 * Returns the average price of houses in a particular community.
 *
 * @param communityId
 * @param houses
 */
export const calculateAvgPrice = (communityId: string, houses: House[]): string => {
  if (!Array.isArray(houses) || !houses?.length) {
    return "";
  }
  const communityHouses = houses.filter((h) => h.communityId === communityId);
  if (!communityHouses.length) {
    return "";
  }
  const avgPrice = communityHouses.map((c) => c.price).reduce((a, v) => a + v) / communityHouses.length;
  return avgPrice.toLocaleString(undefined, { maximumFractionDigits: 0 });
};

/**
 * Returns an array of communities sorted by the community name.
 *
 * @param communities
 */
export const sortCommunitiesByName = (communities: Community[]): Community[] => {
  if (!Array.isArray(communities)) {
    return [];
  }
  return communities.sort((a, b) => a.name.localeCompare(b.name));
};

/**
 * Return the amount of houses in a particular community.
 *
 * @param communityId
 * @param houses
 */
export const calculateHousesInCommunity = (communityId: string, houses: House[]): number => {
  if (!Array.isArray(houses) || !houses.length) {
    return 0;
  }
  const communityHouses = houses.filter((h) => h.communityId === communityId);
  if (!communityHouses.length) {
    return 0;
  }
  return communityHouses.length;
};
