import { useTheme } from "@emotion/react";
import { AddShoppingCartOutlined, Close } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardMedia,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { red } from "@mui/material/colors";
import ProductDetails from "./ProductDetails";
import { useGetProductByNameQuery } from "../../redux/Product";

const Main = () => {
  const allProducts = "products?populate=*";
  const menProducts = "products?populate=*&filters[category][$eq]=men";
  const womenProducts = "products?populate=*&filters[category][$eq]=women";

  const [category, setCategory] = useState(allProducts);
  const [valueAl, setvAlueAl] = useState(allProducts)
  const [openDialog, setOpenDialog] = useState(null);

  const handleChange = (event, newValue) => {
    setvAlueAl(newValue)
    setCategory(newValue);
  };

  const handleClickOpen = (item) => {
    setOpenDialog(item);
  };

  const handleClose = () => {
    setOpenDialog(null);
  };

  const theme = useTheme();
  const isWideScreen = useMediaQuery("(min-width:715px)");

  const { data, error, isLoading } = useGetProductByNameQuery(category);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Container sx={{ mt: 9, py: 9 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={isWideScreen ? "space-between" : "center"}
        flexWrap={"wrap"}
        gap={2}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography variant="body1" fontWeight={"300"}>
            All our new arrivals in a exclusive brand selection
          </Typography>
        </Box>
        <Box>
          <ToggleButtonGroup
            color="error"
            value={valueAl}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
            sx={{
              gap: "16px",
              ".Mui-selected": {
                border: "1px solid rgba(233,69,96,0.5) !important",
                color: "#e94560",
                backgroundColor: "initial",
              },
            }}
          >
            <ToggleButton
              className="myButton"
              value={allProducts}
              sx={{ color: theme.palette.text.primary }}
            >
              All Products
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={menProducts}
              sx={{ color: theme.palette.text.primary }}
            >
              Men Category
            </ToggleButton>
            <ToggleButton
              className="myButton"
              value={womenProducts}
              sx={{ color: theme.palette.text.primary }}
            >
              Women Category
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Stack>
      <Stack
        sx={{ mt: 6 }}
        direction={isWideScreen ? "row" : "column"}
        alignItems={"center"}
        justifyContent={isWideScreen ? "space-between" : "center"}
        flexWrap={"wrap"}
      >
        {data && data.data
          ? data.data.map((item) => {
              const imgData =
                item.attributes.productImg?.data?.[0]?.attributes?.url;
              return (
                <Card
                  sx={{
                    width: 333,
                    mb: 2,
                    ":hover .MuiCardMedia-root": {
                      scale: "1.1",
                      transform: "rotate(1deg)",
                      transition: "0.35s",
                    },
                  }}
                  key={item.id}
                >
                  <CardMedia
                    component="img"
                    alt={item.attributes.productTitle}
                    sx={{ height: 277 }}
                    image={
                      imgData
                        ? `${imgData}`
                        : "placeholder-image-url"
                    }
                  />
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ px: 2, mt: 3 }}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.attributes.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      ${item.attributes.productPrice}
                    </Typography>
                  </Stack>
                  <Box
                    sx={{
                      mx: 1.3,
                      mt: 1,
                      height: 75,
                      overflow: "hidden",
                      textWrap: "wrap",
                    }}
                  >
                    <Typography variant="des">
                      {item.attributes.productDes}
                    </Typography>
                  </Box>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    justifyContent={"space-between"}
                    sx={{ px: 2, mt: 4, mb: 1 }}
                  >
                    <Button
                      color="primary"
                      sx={{ textTransform: "capitalize" }}
                      startIcon={<AddShoppingCartOutlined fontSize="small" />}
                      onClick={() =>
                        handleClickOpen(item.attributes.productRateing)
                      }
                    >
                      Add to Cart
                    </Button>
                    <Rating
                      name="read-only"
                      value={item.attributes.productRateing}
                      precision={0.5}
                      readOnly
                    />
                  </Stack>
                  <Dialog
                    sx={{
                      ".MuiPaper-root": { minWidth: { xs: "100%", md: 800 } },
                    }}
                    open={openDialog === item.attributes.productRateing}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                  >
                    <ProductDetails
                      titleItem={item.attributes.productTitle}
                      linkImg={item.attributes.productImg.data}
                      priceItem={item.attributes.productPrice}
                      desItem={item.attributes.productDes}
                      IMG={imgData}
                    />
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "end",
                        alignItems: "center",
                      }}
                    >
                      <IconButton
                        onClick={handleClose}
                        sx={{
                          ":hover": {
                            rotate: "180deg",
                            transition: "0.35s",
                            color: red[800],
                          },
                          position: "absolute",
                          top: 7,
                          right: 11,
                        }}
                      >
                        <Close />
                      </IconButton>
                    </Box>
                  </Dialog>
                </Card>
              );
            })
          : null}
      </Stack>
    </Container>
  );
};

export default Main;
