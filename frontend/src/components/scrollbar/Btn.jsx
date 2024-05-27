import React, { useState, useEffect } from "react";
import { Fab, Zoom } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useTheme } from "@emotion/react";

const BtnScroll = () => {
  const [show, setShow] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const theme = useTheme();
  return (
    <Zoom in={show}>
      <Fab
        size="small"
        onClick={handleClick}
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          backgroundColor: "#2B3460",
          color:"white"
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default BtnScroll;
