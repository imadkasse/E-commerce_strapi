import {
  Close,
  KeyboardArrowDown,
  MenuOutlined,
  Person2Outlined,
  PersonOutlined,
  Send,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";

import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Badge,
  List,
  ListItemButton,
  ListItemText,
  Menu,
  MenuItem,
  ListItem,
  useMediaQuery,
  Drawer,
  Button,
  MenuList,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { red } from "@mui/material/colors";

import React, { useState } from "react";
import { useTheme } from "@emotion/react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  flexGrow: 0.4,
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777 ",
  "&:focus-within": {
    border: `2px solid ${red[500]}`,
  },
  // "&:hover":{
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  minwidth: "300px",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  display: "flex",
  justifyContent: "space-between",
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const options = [
  "",
  "All Categoties",
  "Car",
  "Clothes",
  "Electronices",
  "Laptop",
  "Desktop",
  "Camera",
  "Toys",
];
const Header2 = () => {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
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
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const searchIconClick = (anchor) => (
    <Container sx={{}}>
      <Box
        sx={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"end"}
          alignItems={"center"}
          sx={{ minWidth: 350, my: 2 }}
        >
          <Box flexGrow={1}>Search</Box>
          <IconButton
            sx={{ width: 30, height: 30 }}
            onClick={toggleDrawer(anchor, false)}
          >
            <Close fontSize="small" />
          </IconButton>
        </Stack>
        <Stack
          sx={{ maxWidth: 350 }}
          direction={"row"}
          alignItems={"center"}
          position={"relative"}
        >
          <Box
            sx={{
              width: "400px",
              height: 40,
              my: 2,
              borderRadius: theme.shape.borderRadius,
              border: "1px solid #777 ",
              "&:focus-within": {
                border: `2px solid ${red[500]}`,
              },
            }}
          >
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Box>
          <Button
            variant="contained"
            color="error"
            sx={{
              height: 40,
              position: "absolute",
              left: "100%",
              transform: "translateX(-98%)",
              borderBottomRightRadius: 22,
              borderTopRightRadius: 22,
              textTransform: "capitalize",
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </Container>
  );

  return (
    <Container
      sx={{
        my: 3,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
      }}
    >
      {useMediaQuery("(min-width:1007px)") && (
        <>
          <Stack alignItems={"center"} direction={"column"}>
            <ShoppingCartOutlined />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              E-Commerce
            </Typography>
          </Stack>

          <Search sx={{ borderRadius: "22px" }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />

            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: theme.palette.menuColor.main,
                borderBottomRightRadius: "22px",
                borderTopRightRadius: "22px",
                p: "0px",
              }}
            >
              <ListItem
                id="lock-button"
                aria-haspopup="listbox"
                aria-controls="lock-menu"
                aria-label="when device is locked"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClickListItem}
              >
                <ListItemText
                  sx={{
                    width: "90px",
                    textAlign: "center",
                    "&:hover": { cursor: "pointer" },
                  }}
                  secondary={options[selectedIndex]}
                />
                <KeyboardArrowDown />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "lock-button",
                role: "listbox",
              }}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index)}
                  sx={{ fontSize: "14px" }}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Search>

          <Stack direction={"row"} alignItems={"center"}>
            <IconButton>
              <StyledBadge badgeContent={4} color="primary">
                <ShoppingCartOutlined />{" "}
              </StyledBadge>
            </IconButton>
            <IconButton>
              <PersonOutlined />
            </IconButton>
          </Stack>
        </>
      )}
      {useMediaQuery("(max-width:1007px)") && (
        <Stack direction={"row"} justifyContent={"space-between"} sx={{width:"100%"}}>
          <Stack alignItems={"center"} direction={"column"} >
            <ShoppingCartOutlined />
            <Typography
              variant="body2"
              sx={{ color: theme.palette.text.primary, fontWeight: "bold" }}
            >
              E-Commerce
            </Typography>
          </Stack>
          <Stack direction={"row"}>
            <Stack direction={"row"} alignItems={"center"}>
              <IconButton>
                <StyledBadge badgeContent={4} color="primary">
                  <ShoppingCartOutlined />{" "}
                </StyledBadge>
              </IconButton>
              <IconButton>
                <PersonOutlined />
              </IconButton>
            </Stack>
            <IconButton onClick={toggleDrawer("top", true)}>
              <SearchIcon />
            </IconButton>
            <Drawer
              anchor={"top"}
              open={state["top"]}
              onClose={toggleDrawer("top", false)}
            >
              {searchIconClick("top")}
            </Drawer>
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default Header2;
