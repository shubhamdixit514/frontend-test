import { BASE_URL } from "../utils/constant";
import { Items } from "../utils/type";
import { CommentType } from "../views/DashBoard/type";

export const fetchData = async (page: number) : Promise<Items[]> => {
  let data = []
  try {
    const response = await fetch(`${BASE_URL}/feed/${page}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
  return data as Items[];
};

export const fetchComments = async (selectedId: string) : Promise<CommentType[]> => {
  let data = []
  try {
    const response = await fetch(`${BASE_URL}/comments/${selectedId}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    data = await response.json();
  } catch (error) {
    console.error("Error fetching comments:", error);
  }
  return data as CommentType[];
};
