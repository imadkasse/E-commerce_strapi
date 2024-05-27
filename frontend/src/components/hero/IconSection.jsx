import { useTheme } from "@emotion/react";
import {
  AccessAlarmOutlined,
  CreditScoreOutlined,
  ElectricBolt,
  WorkspacePremiumOutlined,
} from "@mui/icons-material";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";

const IconSection = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{
        mt: 3,
        bgcolor: theme.palette.mode === "dark" ? "#000" : "#fff",
        color:
          theme.palette.mode === "light" ? theme.palette.text.primary : "white",
      }}
    >
      <Stack
        direction={"row"}
        alignItems={"center"}
        flexWrap={"wrap"}
        divider={
          useMediaQuery("(min-width:1099px)") && (
            <Divider orientation="vertical" flexItem />
          )
        }
      >
        <MyBox
          icon={<ElectricBolt fontSize="large" />}
          text={"Fast Delivre"}
          subText={"Start from $10"}
        />
        <MyBox
          icon={<WorkspacePremiumOutlined fontSize="large" />}
          text={"Money Guarantee"}
          subText={"7 Days Back"}
        />
        <MyBox
          icon={<AccessAlarmOutlined fontSize="large" />}
          text={"365 Days"}
          subText={"For free return"}
        />
        <MyBox
          icon={<CreditScoreOutlined fontSize="large" />}
          text={"Payment"}
          subText={"Secure system"}
        />
      </Stack>
    </Container>
  );
};

const MyBox = ({ icon, text, subText }) => {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      flexGrow={1}
      sx={{ width: 250, p: 1.6 }}
      justifyContent={useMediaQuery("(min-width:600px)") ? "center" : "left"}
      gap={3}
    >
      {icon}
      <Stack>
        <Typography variant="body1">{text}</Typography>
        <Typography variant="body1">{subText}</Typography>
      </Stack>
    </Stack>
  );
};

export default IconSection;
