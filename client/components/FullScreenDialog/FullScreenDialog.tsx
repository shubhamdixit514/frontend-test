import * as React from "react";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Box, Divider, Typography } from "@mui/material";
import Carousel from "../Carousel/Carousel";

export default function FullScreenDialog({
  isOpen,
  handleClose,
  filteredImages,
  comments,
}) {
  console.log("filteredImages", comments);
  return (
    <React.Fragment>
      <Dialog fullScreen open={isOpen}>
        <Box
          sx={{
            position: "relative",
            height: "100vh",
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
            size="small"
            sx={{
              m: 2,
              color: "white",
              backgroundColor: "blue",
              position: "absolute",
              zIndex: 9999,
              "&:hover": {
                backgroundColor: "blue",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
            }}
          >
            <Box
              sx={{
                width: "80%",
              }}
            >
              <Carousel filteredImages={filteredImages} />
            </Box>
            <Box
              sx={{
                width: "20%",
                backgroundColor: "#80808012",
                borderLeft: "1px solid #0000001c",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: 0.8,
                  p: 2,
                  backgroundColor: "white",
                }}
              >
                <Avatar aria-label="recipe" src={filteredImages?.brand.logo} />
                <Box>
                  <Typography
                    aria-label="settings"
                    sx={{
                      color: "#00000099",
                      fontWeight: "600",
                    }}
                  >
                    {filteredImages?.brand?.name}
                  </Typography>
                  <Typography
                    aria-label="settings"
                    sx={{
                      color: "#00000099",
                      fontWeight: "600",
                      fontSize: "10px",
                    }}
                  ></Typography>
                </Box>
              </Box>
              <Divider />
              {comments &&
                comments.map(
                  (item: {
                    user: {
                      avatar: string | undefined;
                      name:
                      | string
                      | number
                      | boolean
                      | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                      | React.ReactFragment
                      | React.ReactPortal
                      | null
                      | undefined;
                    };
                    comment:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                      any,
                      string | React.JSXElementConstructor<any>
                    >
                    | React.ReactFragment
                    | React.ReactPortal
                    | null
                    | undefined;
                  }) => (
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        gap: 0.8,
                        p: 2,
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Avatar aria-label="recipe" src={item?.user?.avatar} />
                        <Box>
                          <Typography
                            aria-label="settings"
                            sx={{
                              color: "#000000d6",
                              fontWeight: "800",
                              fontSize: "14px",
                            }}
                          >
                            {item?.user?.name}
                          </Typography>
                        </Box>
                      </Box>
                      <Typography
                        aria-label="settings"
                        sx={{
                          color: "#00000078",
                          fontWeight: "700",
                          fontSize: "14px",
                          mx: 7,
                          letterSpacing: "0.6px",
                        }}
                      >
                        {item?.comment}
                      </Typography>
                      <Typography
                        aria-label="settings"
                        sx={{
                          color: "#00000078",
                          fontWeight: "700",
                          fontSize: "12px",
                          mx: 7,
                          letterSpacing: "0.6px",
                        }}
                      >
                        Like
                      </Typography>
                    </Box>
                  )
                )}
            </Box>
          </Box>
        </Box>
      </Dialog>
    </React.Fragment>
  );
}
