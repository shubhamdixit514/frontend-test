import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { Skeleton } from "@mui/material";

const CustoLoaderCard = styled(Box)({
  width: "380px",
  height: "500px",
  marginTop: "10px",
  border: "1px solid #0003",
});

const CustomLoaderBox = styled(Box)({
  height: "450px",
});

const CustomCardConent = styled(Box)({
  padding: "0px",
});

const CustomSkeleton = styled(Skeleton)({
  marginBottom: "0px",
});


export{
  CustoLoaderCard,
  CustomLoaderBox,
  CustomCardConent,
  CustomSkeleton
};
