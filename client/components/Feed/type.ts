import { items } from "../../utils/type";

export interface FeedType {
  items: items;
  handleDailog: (id: string) => void;
}
