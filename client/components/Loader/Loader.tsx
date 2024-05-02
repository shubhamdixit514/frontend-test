import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardHeader, Skeleton } from "@mui/material";

export default function Loader() {
  return (
    <Card sx={{ width: 380, height: 500, mt: 1, border: "1px solid #0003" }}>
      <CardHeader
        avatar={
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
          />
        }
        title={
          <Skeleton animation="wave" width="80%" style={{ marginBottom: 0 }} />
        }
        subheader={<Skeleton animation="wave" width="40%" />}
      />
      <CardContent
        sx={{
          p: 0,
        }}
      >
        <Skeleton variant="rectangular" width="100%">
          <div style={{ height: "450px" }} />
        </Skeleton>
      </CardContent>
    </Card>
  );
}
