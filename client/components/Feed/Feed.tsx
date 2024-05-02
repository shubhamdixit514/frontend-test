import { Avatar, CardHeader, CardMedia } from "@mui/material";
import * as React from "react";
import {
  CustomBox,
  CustomCard,
  CustomCardContent,
  CustomJoinText,
  CustomNameText,
} from "./style";

export default function Feed({ items, handleDailog }) {
  return (
    <CustomCard>
      <CardHeader
        avatar={<Avatar aria-label="recipe" src={items?.brand.logo} />}
        action={
          <CustomJoinText aria-label="settings">Join Brief Now</CustomJoinText>
        }
        title={items?.brand?.name}
      />
      <CustomCardContent>
        <CardMedia
          component="img"
          height="440"
          image={items?.banner_image}
          alt="card-img"
          onClick={() => {
            handleDailog(items?.briefref);
          }}
          sx={{
            cursor: "pointer",
          }}
        />
        <CustomBox>
          <CustomNameText>{items?.feed_title}</CustomNameText>
        </CustomBox>
      </CustomCardContent>
    </CustomCard>
  );
}
