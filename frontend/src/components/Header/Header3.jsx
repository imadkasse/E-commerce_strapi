import {
  Accordion,
  AccordionSummary,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  Paper,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import {
  ArrowForwardIos,
  ArrowRightOutlined,
  Category,
  Close,
  DiamondOutlined,
  ExpandMore,
  ManOutlined,
  MenuBookOutlined,
  MenuOutlined,
  SportsBaseballOutlined,
  Toys,
  Woman2Outlined,
} from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import { grey, red } from "@mui/material/colors";
import "./H3.css";

const categories = [
  {
    id: 2,
    name: "Fashion",
    description: "Trending apparel and accessories.",
    icon: <DiamondOutlined />,
  },
  {
    id: 3,
    name: "Man",
    description: "Furniture, appliances, and kitchen essentials.",
    icon: <ManOutlined />,
  },
  {
    id: 4,
    name: "Famle",
    description: "Skincare, makeup, and personal care products.",
    icon: <Woman2Outlined />,
  },
  {
    id: 5,
    name: "Sports",
    description: "Equipment and apparel for sports and outdoor activities.",
    icon: <SportsBaseballOutlined />,
  },
  {
    id: 6,
    name: "Toys",
    description: "Toys, games, and entertainment for all ages.",
    icon: <Toys />,
  },
  {
    id: 7,
    name: "Books",
    description: "Wide selection of books and reading materials.",
    icon: <MenuBookOutlined />,
  },
];

const Header3 = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [expandedPanel, setExpandedPanel] = useState(null);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpandedPanel(isExpanded ? panel : null);
  };

  const [expandedPanel1, setExpandedPanel1] = useState(null);

  const handleChange1 = (panel1) => (event, isExpanded) => {
    setExpandedPanel1(isExpanded ? panel1 : null);
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ height: "100vh" }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Stack width={333} direction={"row"}>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            sx={{ width: 30, height: 30 }}
            onClick={toggleDrawer(anchor, false)}
          >
            <Close fontSize="small" />
          </IconButton>
        </Stack>
        {[
          "Home",
          "Mega Menu",
          "Full Screen Menu",
          "Pages",
          "User",
          "Vendor",
        ].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ width: 333 }}>
            <Accordion
              key={index}
              sx={{
                bgcolor: "transparent",
                border: "none",
                boxShadow: "none",
                width: "100%",
              }}
              expanded={expandedPanel === index}
              onChange={handleChange(index)}
            >
              <AccordionSummary
                expandIcon={
                  <ExpandMore
                    sx={{
                      color: expandedPanel === index ? red[500] : "inherit",
                    }}
                  />
                }
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{ color: expandedPanel === index ? red[500] : "inherit" }}
              >
                <Typography>{text}</Typography>
              </AccordionSummary>
              <List sx={{ py: 0, my: 0 }}>
                <ListItem
                  sx={{
                    py: 0,
                    my: 0,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {["Home", "Pages"].map((item, index1) => {
                    return (
                      <Accordion
                        key={index1}
                        sx={{
                          bgcolor: "transparent",
                          border: "none",
                          boxShadow: "none",
                          width: "100%",
                          p: 1,
                        }}
                        expanded={expandedPanel1 === index1}
                        onChange={handleChange1(index1)}
                      >
                        <AccordionSummary
                          expandIcon={
                            <ExpandMore
                              sx={{
                                color:
                                  expandedPanel1 === index1
                                    ? red[500]
                                    : "inherit",
                              }}
                            />
                          }
                          aria-controls={`panel${index1}-content`}
                          id={`panel${index1}-header`}
                          sx={{
                            color:
                              expandedPanel1 === index1 ? red[500] : "inherit",
                          }}
                        >
                          <Typography>{item}</Typography>
                        </AccordionSummary>
                        <List sx={{ py: 0, my: 0 }}>
                          <ListItem>
                            <ListItemButton>
                              <ListItemText primary={item} />
                            </ListItemButton>
                          </ListItem>
                        </List>
                      </Accordion>
                    );
                  })}
                </ListItem>
              </List>
            </Accordion>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        my: 2,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: 222,
            bgcolor: theme.palette.menuColor.main,
            color: theme.palette.text.primary,
          }}
        >
          <Category />
          <Typography
            variant="body3"
            sx={{ p: "0", textTransform: "capitalize", mx: 1 }}
          >
            Category
          </Typography>
          <Box flexGrow={1}></Box>
          <ArrowForwardIos sx={{ fontSize: "14px" }} />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ my: 1 }}
        >
          {categories.map((item) => {
            return (
              <MenuItem
                sx={{
                  width: 222,
                  textAlign: "center",
                  display: "flex",
                  gap: 1,
                }}
                onClick={handleClose}
                key={item.id}
              >
                {item.icon}
                <Typography
                  variant="body3"
                  sx={{ textTransform: "capitalize" }}
                >
                  {item.name}
                </Typography>
                <Box sx={{ flexGrow: 1 }}></Box>
                <ArrowForwardIos sx={{ fontSize: "14px" }} />
              </MenuItem>
            );
          })}
        </Menu>
      </Box>
      {/*  */}
      {useMediaQuery("(max-width:1007px)") && (
        <IconButton onClick={toggleDrawer("top", true)} sx={{ py: 1 }}>
          <MenuOutlined />
        </IconButton>
      )}

      {/*  */}
      {useMediaQuery("(min-width:1007px)") && (
        <Stack
          sx={{ py: 1, display: { xs: "none", sm: "none", md: "flex" } }}
          direction={"row"}
          justifyContent={"end"}
        >
          {[
            "Home",
            "Mega Menu",
            "Full Screen Menu",
            "Pages",
            "User",
            "Vendor",
          ].map((item, index) => {
            return (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "row",
                  ":hover .Show": { display: "block" },
                  ":hover .colorTitle": { color: red[600] },
                  justifyContent: "center",
                  width: "127px",
                  alignItems: "center",
                  color: theme.palette.text.primary,
                }}
              >
                <Typography
                  className="colorTitle"
                  sx={{
                    fontSize: "13px",
                    fontWeight: 500,
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                >
                  {item}
                </Typography>
                <ExpandMore
                  sx={{ fontSize: "19px", color: grey[500], cursor: "pointer" }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    maxwidth: 170,
                    textAlign: "start",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    display: "none",
                    zIndex: 2,
                  }}
                  className="Show"
                >
                  <Paper
                    className="Show"
                    sx={{
                      py: 1,
                      mt: 5,
                    }}
                  >
                    {item === "Vendor"
                      ? ["Dashborad", "Products", "Orders", "Proflie"].map(
                          (item) => {
                            return (
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                  "&:hover": {
                                    bgcolor: grey[200],
                                    cursor: "pointer",
                                  },
                                  ":hover .colorBtn": { color: red[600] },
                                  px: 1,
                                  position: "relative",
                                  ":hover .ShowSubPaper": { display: "block" },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  className="colorBtn"
                                >
                                  {item}
                                </Typography>
                                {item === "Products" ? (
                                  <ArrowRightOutlined className="colorBtn" />
                                ) : null}
                                {item === "Products" ? (
                                  <Box
                                    className="ShowSubPaper"
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      left: "-120%",
                                      minWidth: 120,
                                    }}
                                  >
                                    <Paper
                                      sx={{
                                        textAlign: "center",

                                        ml: 1,
                                      }}
                                    >
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product 1
                                        </Typography>
                                      </Stack>
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product 2
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                  </Box>
                                ) : null}
                              </Stack>
                            );
                          }
                        )
                      : null}
                    {item === "User"
                      ? ["Dashborad", "Products", "Orders", "Proflie"].map(
                          (item) => {
                            return (
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                  "&:hover": {
                                    bgcolor: grey[200],
                                    cursor: "pointer",
                                  },
                                  ":hover .colorBtn": { color: red[600] },
                                  px: 1,
                                  position: "relative",
                                  ":hover .ShowSubPaper": { display: "block" },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  className="colorBtn"
                                >
                                  {item}
                                </Typography>
                                {item === "Products" ? (
                                  <ArrowRightOutlined className="colorBtn" />
                                ) : null}
                                {item === "Products" ? (
                                  <Box
                                    className="ShowSubPaper"
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      left: "100%",

                                      minWidth: 140,
                                    }}
                                  >
                                    <Paper
                                      sx={{
                                        textAlign: "center",

                                        ml: 1,
                                      }}
                                    >
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                  </Box>
                                ) : null}
                              </Stack>
                            );
                          }
                        )
                      : null}
                    {item === "Pages"
                      ? ["Dashborad", "Products", "Orders", "Proflie"].map(
                          (item) => {
                            return (
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                  "&:hover": {
                                    bgcolor: grey[200],
                                    cursor: "pointer",
                                  },
                                  ":hover .colorBtn": { color: red[600] },
                                  px: 1,
                                  position: "relative",
                                  ":hover .ShowSubPaper": { display: "block" },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  className="colorBtn"
                                >
                                  {item}
                                </Typography>
                                {item === "Products" ? (
                                  <ArrowRightOutlined className="colorBtn" />
                                ) : null}
                                {item === "Products" ? (
                                  <Box
                                    className="ShowSubPaper"
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      left: "100%",
                                      minWidth: 140,
                                    }}
                                  >
                                    <Paper
                                      sx={{
                                        textAlign: "center",

                                        ml: 1,
                                      }}
                                    >
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                  </Box>
                                ) : null}
                              </Stack>
                            );
                          }
                        )
                      : null}
                    {item === "Full Screen Menu"
                      ? ["Dashborad", "Products", "Orders", "Proflie"].map(
                          (item) => {
                            return (
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                  "&:hover": {
                                    bgcolor: grey[200],
                                    cursor: "pointer",
                                  },
                                  ":hover .colorBtn": { color: red[600] },
                                  px: 1,
                                  position: "relative",
                                  ":hover .ShowSubPaper": { display: "block" },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  className="colorBtn"
                                >
                                  {item}
                                </Typography>
                                {item === "Products" ? (
                                  <ArrowRightOutlined className="colorBtn" />
                                ) : null}
                                {item === "Products" ? (
                                  <Box
                                    className="ShowSubPaper"
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      left: "100%",
                                      minWidth: 140,
                                    }}
                                  >
                                    <Paper
                                      sx={{
                                        textAlign: "center",

                                        ml: 1,
                                      }}
                                    >
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                  </Box>
                                ) : null}
                              </Stack>
                            );
                          }
                        )
                      : null}
                    {item === "Mega Menu"
                      ? ["Dashborad", "Products", "Orders", "Proflie"].map(
                          (item) => {
                            return (
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                  "&:hover": {
                                    bgcolor: grey[200],
                                    cursor: "pointer",
                                  },
                                  ":hover .colorBtn": { color: red[600] },
                                  px: 1,
                                  position: "relative",
                                  ":hover .ShowSubPaper": { display: "block" },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  className="colorBtn"
                                >
                                  {item}
                                </Typography>
                                {item === "Products" ? (
                                  <ArrowRightOutlined className="colorBtn" />
                                ) : null}
                                {item === "Products" ? (
                                  <Box
                                    className="ShowSubPaper"
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      left: "100%",
                                      minWidth: 140,
                                      border: "1px soild red",
                                    }}
                                  >
                                    <Paper
                                      sx={{
                                        textAlign: "center",

                                        ml: 1,
                                      }}
                                    >
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                  </Box>
                                ) : null}
                              </Stack>
                            );
                          }
                        )
                      : null}
                    {item === "Home"
                      ? ["Dashborad", "Products", "Orders", "Proflie"].map(
                          (item) => {
                            return (
                              <Stack
                                direction={"row"}
                                justifyContent={"space-between"}
                                sx={{
                                  width: "100%",
                                  "&:hover": {
                                    bgcolor: grey[200],
                                    cursor: "pointer",
                                  },
                                  ":hover .colorBtn": { color: red[600] },
                                  px: 1,
                                  position: "relative",
                                  ":hover .ShowSubPaper": { display: "block" },
                                }}
                              >
                                <Typography
                                  variant="body1"
                                  className="colorBtn"
                                >
                                  {item}
                                </Typography>
                                {item === "Products" ? (
                                  <ArrowRightOutlined className="colorBtn" />
                                ) : null}
                                {item === "Products" ? (
                                  <Box
                                    className="ShowSubPaper"
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      left: "100%",
                                      minWidth: 140,
                                      border: "1px soild red",
                                    }}
                                  >
                                    <Paper
                                      sx={{
                                        textAlign: "center",

                                        ml: 1,
                                      }}
                                    >
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                      <Stack
                                        sx={{
                                          width: "100%",
                                          "&:hover": {
                                            bgcolor: grey[200],
                                            cursor: "pointer",
                                          },
                                          ":hover .colortext": {
                                            color: red[600],
                                          },
                                          px: 1,
                                        }}
                                      >
                                        <Typography
                                          variant="body1"
                                          className="colortext"
                                        >
                                          product1
                                        </Typography>
                                      </Stack>
                                    </Paper>
                                  </Box>
                                ) : null}
                              </Stack>
                            );
                          }
                        )
                      : null}
                  </Paper>
                </Box>
              </Box>
            );
          })}
        </Stack>
      )}

      {/*  */}
      <Drawer
        anchor="top"
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        sx={{ height: "100vh" }}
      >
        {list("top")}
      </Drawer>
    </Container>
  );
};

export default Header3;
