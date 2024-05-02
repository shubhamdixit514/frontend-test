import { Box, Card, Typography, styled } from "@mui/material";

const CustomCard = styled(Card)({
  width: "380px",
  height: "500px",
  marginTop: "6px",
  marginBottom: "6px",
  border: "1px solid #0003",
});

const CustomJoinText = styled(Typography)({
  padding: "12px",
  color: "#0000EE",
  fontWeight: 600,
  fontSize: "14px",
});

const CustomCardContent = styled(Typography)({
  padding: "0px",
  position: "relative",
});

const CustomBox = styled(Box)({
  width: "100%",
  position: "absolute",
  bottom: 11,
});

const CustomNameText = styled(Box)({
    padding: "23px",
    fontSize: "22px",
    fontWeight: "bold",
    color: "white",
  });

  export{
    CustomCard,
    CustomJoinText,
    CustomCardContent,
    CustomBox,
    CustomNameText
  };