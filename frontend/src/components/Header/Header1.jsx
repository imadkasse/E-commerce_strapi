import React, { useState } from "react";
import { useContext } from "react";
import { ColorModeContext } from "../../theme";
import {
  Box,
  IconButton,
  Stack,
  useTheme,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Container,
  List,
  ListItem,
  ListItemText,
  Menu,
} from "@mui/material";
import {
  DarkModeOutlined,
  Facebook,
  Instagram,
  KeyboardArrowDown,
  LightModeOutlined,
  X,
} from "@mui/icons-material";
import { red } from "@mui/material/colors";

const options = ["", "EN", "AR", "FR"];

const Header1 = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const [lang, setLang] = useState("EN");

  const handleChange = (event) => {
    setLang(event.target.value);
  };

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
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  return (
    <Box
      sx={{
        bgcolor: "#2B3445",
        py: "4px",
        borderBottomRightRadius: 4,
        borderBottomLeftRadius: 4,
      }}
    >
      <Container>
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          sx={{ height: "40px", color: "white" }}
        >
          <Stack
            direction={"row"}
            gap={0.7}
            justifyContent={"space-evenly"}
            alignItems={"center"}
          >
            <Typography
              variant="body1"
              sx={{
                mr: 2,
                p: "4px 10px",
                bgcolor: red[600],
                textAlign: "center",
                borderRadius: "12px",
                "&:hover": { bgcolor: "white", color: red[600] },
                transition: "0.3s",
                fontSize: "12px",
                fontWeight: "bold",
              }}
            >
              HOT
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: "12px",
                fontWeight: 300,
                color: "#fff",
              }}
            >
              Free Express Shipping
            </Typography>
          </Stack>
          <Stack direction={"row"} alignItems={"center"}>
            <Box sx={{ display: "flex" }}>
              {theme.palette.mode === "light" ? (
                <IconButton
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <LightModeOutlined />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ "&:hover": { bgcolor: "transparent" } }}
                  onClick={() => {
                    localStorage.setItem(
                      "mode",
                      theme.palette.mode === "dark" ? "light" : "dark"
                    );
                    colorMode.toggleColorMode();
                  }}
                  color="inherit"
                >
                  <DarkModeOutlined />
                </IconButton>
              )}
            </Box>
            <List
              component="nav"
              aria-label="Device settings"
              sx={{
                bgcolor: "transparent",
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
                  sx={{ width: "50px", height: "20px", textAlign: "center" }}
                >
                  {options[selectedIndex]}
                </ListItemText>
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
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
            <Stack direction={"row"}  gap={0.3} sx={{display:{xs:"none",sm:"block"}}}>
              <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Facebook sx={{ color: "white" }} />
              </IconButton>
              <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <X sx={{ color: "white" }} />
              </IconButton>
              <IconButton sx={{ "&:hover": { bgcolor: "transparent" } }}>
                <Instagram sx={{ color: "white" }} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header1;
