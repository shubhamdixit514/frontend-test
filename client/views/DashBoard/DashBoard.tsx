import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Feed from "../../components/Feed/Feed";
import FullScreenDialog from "../../components/FullScreenDialog/FullScreenDialog";
import Loader from "../../components/Loader/Loader";
import { BASE_URL } from "../../utils/Utils";

const StyledBox = styled(Box)({
  display: "flex",
  height: "100%",
  justifyContent: "center",
  overflow: "auto",
});

const DashBoard = () => {
  const [items, setItems] = useState<any>([]);
  const [comments, setComments] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [selectedId, setSelectedId] = useState(null);
  console.log("comments", items);

  const fetchData = useCallback(async (page) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/feed/${page}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (page === 1) {
        setItems(data);
      } else {
        setItems((prevItems) => [...prevItems, ...data]);
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  }, []);

  const fetchComments = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${BASE_URL}/comments/${selectedId}`);
      console.log("selectedId", selectedId);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setComments(data);
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(page);
    window.scrollTo(0, 0);
  }, [page]);

  const handleClickOpen = (id) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const filteredImages = items.find((item) => item.briefref === selectedId);

  useEffect(() => {
    if (selectedId !== null) {
      fetchComments();
    }
  }, [selectedId]);

  return (
    <>
      <StyledBox>
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
      </StyledBox>
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
