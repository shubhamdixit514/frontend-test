import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

export const CustoLoaderCard = styled(Box)({
  width: "380px",
  height: "500px",
  marginTop: "10px",
  border: "1px solid #0003",
});

export const CustomLoaderBox = styled(Box)({
  height: "450px",
});

export const CustomCardConent = styled(Box)({
  padding: "0px",
});

export const CustomSkeleton = styled(Skeleton)({
  marginBottom: "0px",
});
