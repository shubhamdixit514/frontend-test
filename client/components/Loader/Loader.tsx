import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, CardHeader, Skeleton } from "@mui/material";
import {
  CustoLoaderCard,
  CustomCardConent,
  CustomLoaderBox,
  CustomSkeleton,
} from "./style";

export default function Loader() {
  return (
    <CustoLoaderCard>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={<CustomSkeleton animation="wave" width="80%" />}
        subheader={<Skeleton animation="wave" width="40%" />}
      />
      <CustomCardConent>
        <Skeleton variant="rectangular" width="100%">
          <CustomLoaderBox />
        </Skeleton>
      </CustomCardConent>
    </CustoLoaderCard>
  );
}
