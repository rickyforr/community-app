import { Community, House } from "../communities/communities.props.interface";
import { calculateAvgPrice, calculateHousesInCommunity, sortCommunitiesByName } from "./app.utils";

describe("AppUtils", () => {
  describe("calculateAvgPrice", () => {
    it("should calculate average price of houses in the community and return in the proper format", () => {
      const communityId: string = "1";
      const houses: House[] = [
        {
          id: "1",
          communityId: "1",
          price: 400000,
          area: 950,
          type: "House",
        },
        {
          id: "1",
          communityId: "1",
          price: 800000,
          area: 920,
          type: "House",
        },
      ];
      const result = calculateAvgPrice(communityId, houses);
      expect(result).toBe("600,000");
    });

    it("should return an empty string if houses array is empty", () => {
      const communityId: string = "2";
      const houses: House[] = [];
      const result = calculateAvgPrice(communityId, houses);
      expect(result).toBe("");
    });

    it("should return an empty string if no houses match the given community id", () => {
      const communityId: string = "2";
      const houses: House[] = [
        {
          id: "1",
          communityId: "1",
          price: 400000,
          area: 950,
          type: "House",
        },
        {
          id: "1",
          communityId: "1",
          price: 800000,
          area: 920,
          type: "House",
        },
      ];
      const result = calculateAvgPrice(communityId, houses);
      expect(result).toBe("");
    });
  });

  describe("sortCommunitiesByName", () => {
    it("should return array of sorted communities", () => {
      const communities: Community[] = [
        {
          id: "2",
          name: "Varsity",
          imgUrl: "url",
          group: "North West",
        },
        {
          id: "1",
          name: "Bowness",
          imgUrl: "url",
          group: "North West",
        },

        {
          id: "3",
          name: "Mountview",
          imgUrl: "url",
          group: "North East",
        },
      ];
      const result = sortCommunitiesByName(communities);
      expect(result[0].name).toBe("Bowness");
      expect(result[1].name).toBe("Mountview");
      expect(result[2].name).toBe("Varsity");
    });
  });

  describe("calculateHousesInCommunity", () => {
    it("should return the amount of houses in a particular community", () => {
      const communityId: string = "1";
      const houses: House[] = [
        {
          id: "1",
          communityId: "1",
          price: 400000,
          area: 950,
          type: "House",
        },
        {
          id: "2",
          communityId: "1",
          price: 800000,
          area: 920,
          type: "House",
        },
        {
          id: "3",
          communityId: "4",
          price: 800000,
          area: 920,
          type: "House",
        },
      ];
      const result = calculateHousesInCommunity(communityId, houses);
      expect(result).toBe(2);
    });

    it("should return 0 if the house array is empty", () => {
      const communityId: string = "1";
      const houses: House[] = [];
      const result = calculateHousesInCommunity(communityId, houses);
      expect(result).toBe(0);
    });

    it("should return the 0 if no houses match the community id", () => {
      const communityId: string = "6";
      const houses: House[] = [
        {
          id: "1",
          communityId: "1",
          price: 400000,
          area: 950,
          type: "House",
        },
        {
          id: "2",
          communityId: "1",
          price: 800000,
          area: 920,
          type: "House",
        },
        {
          id: "3",
          communityId: "4",
          price: 800000,
          area: 920,
          type: "House",
        },
      ];
      const result = calculateHousesInCommunity(communityId, houses);
      expect(result).toBe(0);
    });
  });
});
