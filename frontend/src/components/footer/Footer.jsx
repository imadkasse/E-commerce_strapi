import { useTheme } from "@emotion/react";
import { Box, Button, Container, Typography,useMediaQuery } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
      <Box sx={{ bgcolor: "#2B3445" ,py:1.3,borderTopLeftRadius:8,borderTopRightRadius:8}}>
      <Typography
        variant="h6"
        sx={{
          display: "flex",
          flexDirection:useMediaQuery("(max-width:415px)")?"column":"row",
          justifyContent:"center",
          alignItems:"center",
          fontSize: 18,
          color:"white"
        }}
        color={"HighlightText"}
      >
        Designed and developed by
        <Button
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Kasse imad
        </Button>
        ©2024
      </Typography>
    </Box>
    
  );
};

export default Footer;
