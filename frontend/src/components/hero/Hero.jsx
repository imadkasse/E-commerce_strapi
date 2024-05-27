import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import bannerImage1 from "../../imgs/banner-17.jpg";
import bannerImage2 from "../../imgs/banner-16.jpg";
import bannerImage3 from "../../imgs/banner-15.jpg";
import bannerImage4 from "../../imgs/banner-25.jpg";

import { ArrowForward } from "@mui/icons-material";
import React from "react";
import { useTheme } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { red } from "@mui/material/colors";
import "./sliderStyles.css";
import IconSection from "./IconSection";

const mySlider = [
  { text: "MEN", link: bannerImage3 },
  { text: "WOMEN", link: bannerImage4 },
];
const Hero = () => {
  const theme = useTheme();
  return (
    <Container sx={{pt:2}}>
      <Box
        sx={{
          mt: 2.5,
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Box
          sx={{
            flexGrow: 1,
            width: "72%",
          }}
        >
          <Swiper
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {mySlider.map((item) => {
              return (
                <SwiperSlide
                  key={item.text}
                  style={{}}
                  className="parent-slider"
                >
                  <img src={item.link} alt="" style={{ width: "100%" }} />
                  <Stack
                    sx={{
                      [theme.breakpoints.up("sm")]: {
                        position: "absolute",
                        top: "50%",
                        left: 31,
                        transform: "translateY(-50%)",
                      },
                      [theme.breakpoints.down("sm")]: {
                        pt: 4,
                        pb: 7,
                      },
                      px: 4,
                      gap: 2,
                      color:
                        theme.palette.mode === "light"
                          ? theme.palette.text.primary
                          : "black",
                    }}
                  >
                    <Typography variant="h5">LIFESTYLE COLLECTION</Typography>
                    <Stack
                      direction={"row"}
                      sx={{
                        [theme.breakpoints.up("sm")]: {
                          justifyContent: "start",
                        },
                        [theme.breakpoints.down("sm")]: {
                          justifyContent: "center",
                        },
                      }}
                    >
                      <Typography
                        variant="h3"
                        sx={{
                          lineHeight: "16px",
                          mt: 1,
                          fontWeight: "bold",
                          textAlign: "start",
                        }}
                      >
                        {item.text}
                      </Typography>
                    </Stack>

                    <Stack
                      direction={"row"}
                      gap={"3px"}
                      sx={{
                        [theme.breakpoints.up("sm")]: {
                          justifyContent: "start",
                        },
                        [theme.breakpoints.down("sm")]: {
                          justifyContent: "center",
                        },
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "550",
                        }}
                      >
                        SALE UP TO
                      </Typography>
                      <Typography
                        variant="h6"
                        sx={{
                          color: red[600],
                          fontWeight: "650",
                        }}
                      >
                        60% OFF
                      </Typography>
                    </Stack>

                    <Typography
                      variant="h6"
                      sx={{
                        mt: -3,
                        fontSize: "15px",
                      }}
                    >
                      Get Free Shipping on orders over $99.00
                    </Typography>
                    <Stack
                      direction={"row"}
                      sx={{
                        [theme.breakpoints.up("sm")]: {
                          justifyContent: "start",
                        },
                        [theme.breakpoints.down("sm")]: {
                          justifyContent: "center",
                        },
                      }}
                    >
                      <Button
                        sx={{
                          borderRadius: "0px",
                          width: "140px",
                          textAlign: "center",
                          bgcolor: theme.palette.btnColor.main,
                          "&:hover": {
                            bgcolor: theme.palette.btnColorHover.main,
                          },
                        }}
                      >
                        <Link
                          href="#"
                          underline="none"
                          sx={{
                            display: "flex",
                            color: "white",
                            fontWeight: 550,
                            alignItems: "center",
                          }}
                        >
                          Shop Now
                        </Link>
                      </Button>
                    </Stack>
                  </Stack>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Box sx={{ display: { xs: "none", md: "block", minWidth: "26.6%" } }}>
          <Box sx={{ position: "relative" }}>
            <img src={bannerImage1} alt="img1" style={{ width: "100%" }} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                left: 31,
                color:
                  theme.palette.mode === "light"
                    ? theme.palette.text.primary
                    : "black",
                transform: "translateY(-50%)",
              }}
            >
              <Typography variant="caption" sx={{ fontSize: "18px" }}>
                NEW ARRIVALS
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  lineHeight: "16px",
                  mt: 1,
                }}
              >
                SUMMER
              </Typography>

              <Typography variant="h6">SALE 20% OFF</Typography>
              <Link
                sx={{
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.text.primary
                      : "black",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop now
                <ArrowForward />
              </Link>
            </Stack>
          </Box>
          <Box sx={{}}>
            <Box sx={{ position: "relative" }}>
              <img src={bannerImage2} alt="img2" style={{ width: "100%" }} />
              <Stack
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 31,
                  color:
                    theme.palette.mode === "light"
                      ? theme.palette.text.primary
                      : "black",
                  transform: "translateY(-50%)",
                }}
              >
                <Typography variant="caption" sx={{ fontSize: "18px" }}>
                  GMAING 4K
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    lineHeight: "16px",
                    mt: 1,
                  }}
                >
                  DESKTOP &
                </Typography>
                <Typography variant="h6" sx={{}}>
                  LAPTOPS
                </Typography>
                <Link
                  sx={{
                    color:
                      theme.palette.mode === "light"
                        ? theme.palette.text.primary
                        : "black",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    transition: "0.2s",
                    "&:hover": { color: "#D23F57" },
                  }}
                  href="#"
                  underline="none"
                >
                  shop now
                  <ArrowForward />
                </Link>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
};

export default Hero;
