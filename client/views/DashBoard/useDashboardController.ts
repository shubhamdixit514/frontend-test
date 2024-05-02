import { useCallback, useEffect, useState } from "react";
import { ProductWithAds } from "../../utils/type";
import { BASE_URL } from "../../utils/Utils";

export const useDashboardController = () => {
  const [items, setItems] = useState([]);
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);

  const fetchData = useCallback(async (page: number) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/feed/${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setItems((prevItems) => (page === 1 ? data : [...prevItems, ...data]));
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
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
    } catch (error) {
      console.error("Error fetching comments:", error);
    } finally {
      setIsLoading(false);
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

  const handleClickOpen = (id: React.SetStateAction<null>) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredImages = items.find(
    (item: ProductWithAds) => item.briefref === selectedId
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
