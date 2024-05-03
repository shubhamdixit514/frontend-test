import { useCallback, useEffect, useState } from "react";
import { items } from "../../utils/type";
import { BASE_URL } from "../../utils/constant";
import { CommentType } from "./type";

export const useDashboardController = () => {
  const [items, setItems] = useState<items[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<string>("");

  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/feed/${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems((prevItems) => (page === 1 ? data : [...prevItems, ...data]));
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }, []);

  const fetchComments = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/comments/${selectedId}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  }, [selectedId]);

  useEffect(() => {
    fetchData(page);
    window.scrollTo(0, 0);
  }, [fetchData, page]);

  useEffect(() => {
    if (selectedId !== null) {
      fetchComments();
    }
  }, [selectedId, fetchComments]);

  const handleClickOpen = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredImages = items.find(
    (item) => item.briefref === selectedId
  );

  return {
    setPage,
    page,
    isLoading,
    items,
    handleClickOpen,
    handleClose,
    filteredImages,
    comments,
    open,
  };
};
