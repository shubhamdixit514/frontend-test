import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Feed from "../../components/Feed/Feed";
import FullScreenDialog from "../../components/FullScreenDialog/FullScreenDialog";
import Loader from "../../components/Loader/Loader";
import { CustomBox } from "./style";
import { useDashboardController } from "./useDashboardController";
import { Items } from "../../utils/type";

const DashBoard = () => {
  const {
    setPage,
    page,
    isLoading,
    items,
    handleClickOpen,
    handleClose,
    filteredImages,
    comments,
    open,
  } = useDashboardController();

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
            items && items.map((item: Items, index: number) => (
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
