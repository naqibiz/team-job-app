import React from "react";
import { theme } from "@/styles/theme";
import { Box, Container, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" color={theme.palette.info.main}>
        MUI Next Js Project Team Job
      </Typography>
      <Grid container>
        <Grid md={4} display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ backgroundColor: theme.palette.primary.main }}>
            <Typography variant="h5" color={theme.palette.info.main}>
              Column One
            </Typography>
          </Box>
        </Grid>
        <Grid md={4} display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ backgroundColor: theme.palette.primary.main }}>
            <Typography variant="h5" color={theme.palette.info.main}>
              Column One
            </Typography>
          </Box>
        </Grid>
        <Grid md={4} display="flex" justifyContent="center" alignItems="center">
          <Box sx={{ backgroundColor: theme.palette.primary.main }}>
            <Typography variant="h5" color={theme.palette.info.main}>
              Column One
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
