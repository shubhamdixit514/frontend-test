import { IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";

const CustomCommentBox = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: 0.8,
  padding: 12,
});

const CustomHeaderBox = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "12px",
});

const CustoHeaderText = styled(Typography)({
  color: "#000000d6",
  fontWeight: "800",
  fontSize: "14px",
});

const CustomCommentText = styled(Typography)({
  color: "#00000078",
  fontWeight: "700",
  fontSize: "14px",
  margin: "0px 52px",
  letterSpacing: "0.6px",
});

const CustomLikeText = styled(Typography)({
  color: "#00000078",
  fontWeight: "400",
  fontSize: "12px",
  margin: "0px 52px",
  letterSpacing: "0.6px",
});

const CustomDailogBox = styled(Box)({
  position: "relative",
  height: "100vh",
});

const CustomIconButton = styled(IconButton)({
  margin: "10px 10px",
  color: "white",
  backgroundColor: "blue",
  position: "absolute",
  zIndex: 9999,
  "&:hover": {
    backgroundColor: "blue",
  },
});

const CustomCarouselOuter = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
});

const CustomLeftPanel = styled(Box)({
  width: "80%",
});

const CustomRightPanel = styled(Box)({
  width: "20%",
  backgroundColor: "#80808012",
  borderLeft: "1px solid #0000001c",
});

const CustomRightPanelBox = styled(Box)({
  width: "100%",
  display: "flex",
  alignItems: "center",
  gap: 0.8,
  padding: "16px",
  backgroundColor: "white",
});

const CustomCommentWrapper = styled(Box)({
  color: "#00000099",
  fontWeight: "600",
  margin:"0px 8px"
});

const CustomDescription = styled(Box)({
  color: "#00000099",
  fontWeight: "600",
  margin:"4px 20px",
});

export{
  CustomCommentBox,
  CustomHeaderBox,
  CustoHeaderText,
  CustomCommentText,
  CustomLikeText,
  CustomDailogBox,
  CustomIconButton,
  CustomCarouselOuter,
  CustomLeftPanel,
  CustomRightPanel,
  CustomRightPanelBox,
  CustomCommentWrapper,
  CustomDescription
};