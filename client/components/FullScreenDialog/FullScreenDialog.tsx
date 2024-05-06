import { Avatar, Box, Divider, Typography } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import React from "react";
import Carousel from "../Carousel/Carousel";
import {
  CustoHeaderText,
  CustomCarouselOuter,
  CustomCommentBox,
  CustomCommentText,
  CustomCommentWrapper,
  CustomDailogBox,
  CustomHeaderBox,
  CustomIconButton,
  CustomLeftPanel,
  CustomLikeText,
  CustomRightPanel,
  CustomRightPanelBox,
} from "./style";

const Comment = ({ user, comment }) => (
  <CustomCommentBox>
    <CustomHeaderBox>
      <Avatar aria-label="recipe" src={user?.avatar} />
      <Box>
        <CustoHeaderText aria-label="settings">{user?.name}</CustoHeaderText>
      </Box>
    </CustomHeaderBox>
    <CustomCommentText aria-label="settings">{comment}</CustomCommentText>
    <CustomLikeText aria-label="settings">Like</CustomLikeText>
  </CustomCommentBox>
);

const FullScreenDialog = ({
  isOpen,
  handleClose,
  filteredImages,
  comments,
}) => (
  <Dialog fullScreen open={isOpen}>
    <CustomDailogBox>
      <CustomIconButton
        edge="start"
        color="inherit"
        onClick={handleClose}
        aria-label="close"
        size="small"
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="20" cy="20" r="20" fill="#126AE8" />
          <g clip-path="url(#clip0_3270_3545)">
            <path
              d="M26.5868 25.5233C26.9947 25.934 26.9947 26.6002 26.5868 27.0109C26.179 27.4216 25.5172 27.4216 25.1093 27.0109L19.9654 21.7933L14.7849 27.0092C14.377 27.4198 13.7152 27.4198 13.3073 27.0092C12.8994 26.5985 12.8995 25.9323 13.3073 25.5216L18.4896 20.3074L13.3059 15.0521C12.898 14.6414 12.898 13.9752 13.3059 13.5645C13.7138 13.1538 14.3755 13.1538 14.7834 13.5645L19.9654 18.8216L25.1459 13.6057C25.5537 13.195 26.2155 13.195 26.6234 13.6057C27.0313 14.0163 27.0313 14.6826 26.6234 15.0933L21.4411 20.3074L26.5868 25.5233Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_3270_3545">
              <rect
                width="14"
                height="15"
                fill="white"
                transform="translate(13 13)"
              />
            </clipPath>
          </defs>
        </svg>
      </CustomIconButton>
      <CustomCarouselOuter>
        <CustomLeftPanel>
          <Carousel filteredImages={filteredImages} />
        </CustomLeftPanel>
        <CustomRightPanel>
          <CustomRightPanelBox>
            <Avatar aria-label="recipe" src={filteredImages?.brand.logo} />
            <CustomCommentWrapper>
              <Typography aria-label="settings">
                {filteredImages?.brand?.name}
              </Typography>
            </CustomCommentWrapper>
          </CustomRightPanelBox>
          <Divider />
          {comments &&
            comments.map((item, index) => (
              <Comment key={index} user={item.user} comment={item.comment} />
            ))}
        </CustomRightPanel>
      </CustomCarouselOuter>
    </CustomDailogBox>
  </Dialog>
);

export default FullScreenDialog;
