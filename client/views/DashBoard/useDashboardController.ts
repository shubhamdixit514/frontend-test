import { useEffect, useState } from "react";
import { Items } from "../../utils/type";
import { CommentType } from "./type";
import { fetchComments, fetchData } from "../../api/fetchData";

export const useDashboardController = () => {
  const [items, setItems] = useState<Items[]>([]);
  const [comments, setComments] = useState<CommentType[]>([]);
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [selectedId, setSelectedId] = useState<string>("");

  const callItems = async () => {
    setIsLoading(true)
    const items = await fetchData(page)
    setItems((prevItems) => (page === 1 ? items : [...prevItems, ...items]));
    setIsLoading(false)
  }

  const callComments = async () => {
    setIsLoading(true)
    const comments = await fetchComments(selectedId)
    setComments(comments)
    setIsLoading(false)
  }

  useEffect(() => {
    callItems()
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    if (selectedId !== "") {
      callComments()
    }
  }, [selectedId]);

  const handleClickOpen = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredImages = items.find((item) => item.briefref === selectedId);

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
