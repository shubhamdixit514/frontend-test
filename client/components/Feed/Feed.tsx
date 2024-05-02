import { Avatar, Box, CardHeader, CardMedia, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import * as React from "react";

export default function Feed({ items, handleDailog }) {
  console.log('11111111111111111111111111111111', items)
  return (
    <Card
      sx={{
        width: 380,
        height: 500,
        mt: 1,
        border: "1px solid #0003",
      }}
    >
      <CardHeader
        avatar={
          <Avatar
            aria-label="recipe"
            src={items?.brand.logo}
          />
        }
        action={
          <Typography
            aria-label="settings"
            sx={{
              p: 2,
              color: "#0000EE",
              fontWeight:600
            }}
          >
            Join Brief Now
          </Typography>
        }
        title={items?.brand?.name}
      />
      <CardContent
        sx={{
          p: 0,
          position: "relative",
        }}
      >
        <CardMedia
            component="img"
          height="440"
          image={items?.banner_image}
          alt="card-img"
          onClick={()=>{handleDailog(items?.briefref) }}
          sx={{
            cursor: "pointer",
          }}
        />
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            bottom: 40,
          }}
        >
          <Typography
            sx={{
              p: 2,
              fontSize: "22px",
              fontWeight: "bold",
              color: "white",
            }}
          >
            {items?.feed_title}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
