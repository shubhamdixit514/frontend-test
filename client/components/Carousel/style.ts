import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Avatar, Typography } from "@mui/material";

const CustomAvatar = styled(Avatar)({
  marginTop: "4px",
});

const CustomTypographyTitle = styled(Typography)({
  color: "black",
  fontWeight: 900,
  fontSize: "20px",
  marginTop: "4px",
});

const CustomTypographyDate = styled(Typography)({
  color: "black",
  fontSize: "14px",
  fontWeight: 600,
  padding: "2px",
});

const CustomTypographyBannerText = styled(Typography)({
  color: "black",
  fontWeight: 500,
  padding: "2px",
});

const CustomUpArrow = styled(Box)<{ disabled: boolean }>(
  ({ disabled }) => ({
    "&.disabled": {
      cursor: "not-allowed",
    },
    color: disabled ? "gray" : "blue",
    transform: `rotate(177deg)`,
    position: "absolute",
    top: "44%",
    right: "0.9%",
    cursor: "pointer",
    zIndex: 1,
  })
);

const CustomDownArrow = styled(Box)<{ disabled: boolean }>(
  ({ disabled }) => ({
    "&.disabled": {
      cursor: "not-allowed",
    },
    color: disabled ? "gray" : "blue",
    position: "absolute",
    top: "50%",
    right: "0.9%",
    cursor: "pointer",
    zIndex: 1,
  })
);

const CustomSliderBox = styled(Typography)({
  height: "98vh",
  overflow: "hidden",
});

const CustomMediaBox = styled(Box)({
  display: "flex !important",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: "black",
});

const CustomMediaSecondBox = styled(Box)({
  display: "flex !important",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: "white",
});


export {
  CustomAvatar,
  CustomTypographyTitle,
  CustomTypographyDate,
  CustomTypographyBannerText,
  CustomUpArrow,
  CustomDownArrow,
  CustomSliderBox,
  CustomMediaBox,
  CustomMediaSecondBox
};