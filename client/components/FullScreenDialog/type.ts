import { Items } from "../../utils/type";

export type UserData = {
  userref: string;
  name: string;
  avatar: string;
};

export interface User {
  userref: string;
  name: string;
  avatar: string;
}

export interface Comments {
  bcommentref?: string;
  briefref?: string;
  user: User;
  comment: string;
  submitted_on?: string;
}

export interface DailogTypes {
  isOpen: boolean;
  handleClose: () => void;
  filteredImages?: items;
  comments: Comments[];
}
