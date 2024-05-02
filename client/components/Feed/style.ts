import { Box, Card, CardMedia, Typography, styled } from "@mui/material";

export const CustomCard = styled(Card)({
  width: "380px",
  height: "500px",
  marginTop: "6px",
  marginBottom: "6px",
  border: "1px solid #0003",
});

export const CustomJoinText = styled(Typography)({
  padding: "12px",
  color: "#0000EE",
  fontWeight: 600,
  fontSize: "14px",
});

export const CustomCardContent = styled(Typography)({
  padding: "0px",
  position: "relative",
});

export const CustomBox = styled(Box)({
  width: "100%",
  position: "absolute",
  bottom: 11,
});

export const CustomNameText = styled(Box)({
    padding: "23px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
  });
