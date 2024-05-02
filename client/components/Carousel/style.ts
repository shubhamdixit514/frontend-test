import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Avatar, CardMedia, Typography } from "@mui/material";

export const CustomAvatar = styled(Avatar)({
  marginTop: "4px",
});

export const CustomTypographyTitle = styled(Typography)({
  color: "black",
  fontWeight: 900,
  fontSize: "20px",
  marginTop: "4px",
});

export const CustomTypographyDate = styled(Typography)({
  color: "black",
  fontSize: "14px",
  fontWeight: 600,
  padding: "2px",
});

export const CustomTypographyBannerText = styled(Typography)({
  color: "black",
  fontWeight: 500,
  padding: "2px",
});

export const CustomUpArrow = styled(Box)<{ disabled: boolean }>(
  ({ disabled }) => ({
    "&.disabled": {
      cursor: "not-allowed",
    },
    color: disabled ? "gray" : "blue",
    transform: `rotate(177deg)`,
    position: "absolute",
    top: "44%",
    left: "96.4%",
    cursor: "pointer",
    zIndex: 1,
  })
);

export const CustomDownArrow = styled(Box)<{ disabled: boolean }>(
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

export const CustomSliderBox = styled(Typography)({
  height: "98vh",
  overflow: "hidden",
});

export const CustomMediaBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: "black",
});

export const CustomMediaSecondBox = styled(Box)({
  display: "flex !important",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  backgroundColor: "white",
});
