import React, { useCallback, useEffect, useState } from "react";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import InfiniteScroll from "react-infinite-scroll-component";
import Feed from "../../components/Feed/Feed";
import FullScreenDialog from "../../components/FullScreenDialog/FullScreenDialog";
import Loader from "../../components/Loader/Loader";
import { BASE_URL } from "../../utils/Utils";
import { CustomBox } from "./style";
import { ProductWithAds } from "../../utils/type";

const DashBoard = () => {
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

  return (
    <>
      <CustomBox>
        <InfiniteScroll
          dataLength={items.length}
          next={() => setPage(page + 1)}
          hasMore={true}
          loader={<Loader />}
        >
          {isLoading ? (
            <Loader />
          ) : (
            items.map((item, index) => (
              <Feed key={index} items={item} handleDailog={handleClickOpen} />
            ))
          )}
        </InfiniteScroll>
      </CustomBox>
      <FullScreenDialog
        isOpen={open}
        handleClose={handleClose}
        filteredImages={filteredImages}
        comments={comments}
      />
    </>
  );
};

export default DashBoard;
