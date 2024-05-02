import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Avatar, CardMedia, IconButton, Typography } from "@mui/material";

export const CustomCommentBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 0.8,
  padding: 12,
});

export const CustomHeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: 2,
});

export const CustoHeaderText = styled(Typography)({
  color: "#000000d6",
  fontWeight: "800",
  fontSize: "14px",
});

export const CustomCommentText = styled(Typography)({
  color: "#00000078",
  fontWeight: "700",
  fontSize: "14px",
  margin: "0px 44px",
  letterSpacing: "0.6px",
});

export const CustomLikeText = styled(Typography)({
  color: "#00000078",
  fontWeight: "700",
  fontSize: "12px",
  margin: "0px 44px",
  letterSpacing: "0.6px",
});

export const CustomDailogBox = styled(Box)({
  position: "relative",
  height: "100vh",
});

export const CustomIconButton = styled(IconButton)({
  margin: "10px 10px",
  color: "white",
  backgroundColor: "blue",
  position: "absolute",
  zIndex: 9999,
  "&:hover": {
    backgroundColor: "blue",
  },
});

export const CustomCarouselOuter = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
});

export const CustomLeftPanel = styled(Box)({
  width: "80%",
});

export const CustomRightPanel = styled(Box)({
  width: "20%",
  backgroundColor: "#80808012",
  borderLeft: "1px solid #0000001c",
});

export const CustomRightPanelBox = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 0.8,
  padding: "16px",
  backgroundColor: "white",
});

export const CustomCommentWrapper = styled(Box)({
  color: "#00000099",
  fontWeight: "600",
});
