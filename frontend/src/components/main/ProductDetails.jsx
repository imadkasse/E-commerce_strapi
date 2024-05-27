import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import "../../index.css"

const ProductDetails = ({ linkImg, titleItem, priceItem, desItem, IMG }) => {
  // const [openDialog, setOpenDialog] = useState(null);
  // const handleClickOpen = (item) => {
  //   setOpenDialog(item);
  // };

  // const handleClose = () => {
  //   setOpenDialog(null);
  // };
  return (
    <Stack
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
      alignItems={"center"}
      gap={1}
      height={"100%"}
    >
      <img
        src={`${IMG}`}
        alt="img"
        style={{ height: "100%", display: "flex" }}
        width={345}
      />
      <Stack
        direction={"column"}
        alignItems={"start"}
        sx={{
          textAlign: { xs: "center", sm: "left" },
        }}
      >
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{ fontWeight: "bold", width: { xs: "100%", md: "440px" } }}
        >
          {titleItem}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            color: red[600],
            fontWeight: "bold",
            width: { xs: "100%", md: "" },
          }}
        >
          ${priceItem}
        </Typography>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          sx={{
            fontSize: "15px",
            width: "440px",
            wordWrap: "break-word",
          }}
          
        >
          {desItem}
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"center"}
          width={{ xs: "100%", md: "" }}
          sx={{ justifyContent: { xs: "center", sm: "start" } }}
          gap={1}
        >
          {linkImg.map((item) => {
            return (
              <img
                src={`${item.attributes.url}`}
                key={item}
                width={90}
                height={60}
                style={{ borderRadius: 3 ,cursor:"pointer"}}
                className="imghover"
              />
            );
          })}
        </Stack>
        <Box sx={{ width: { xs: "100%", md: "100%" } }}>
          <Button
            sx={{ mt: 2, mb: { xs: 1, sm: 0 }, textTransform: "capitalize" }}
            variant="contained"
            startIcon={
              <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
            }
          >
            Buy Now
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
