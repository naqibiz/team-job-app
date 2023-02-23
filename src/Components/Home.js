import React from "react";
import { theme } from "@/styles/theme";
import { Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Typography variant="h3" color={theme.palette.info.main}>
      MUI Next Js Project Team Job
    </Typography>
  );
};

export default HomePage;
