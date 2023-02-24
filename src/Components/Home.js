import React from "react";
import { theme } from "@/styles/theme";
import { Box, Container, Grid, Typography } from "@mui/material";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h3" color={theme.palette.info.main}>
        MUI Next Js Project Team Job
      </Typography>
      <Grid container rowSpacing={1} columnSpacing={3}>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="secondary">
              Column One
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="secondary">
              Column Two
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="secondary">
              Column Three
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="secondary">
              Column Four
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="secondary">
              Column Five
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              textAlign: "center",
            }}
          >
            <Typography variant="h5" color="secondary">
              Column Six
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
