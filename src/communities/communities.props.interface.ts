export type Community = {
  id: string;
  name: string;
  imgUrl: string;
  group: string;
};

export type House = {
  id: string;
  communityId: string;
  price: number;
  area: number;
  type: string;
};

export interface ICommunities {
  communities: Community[];
  houses: House[];
}
