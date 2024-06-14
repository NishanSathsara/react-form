import { Box, Grid } from "@mui/material";
import backgroundImage from "../../assets/background.png";
import RFLogo from "../../shared/components/atoms/RFLogo";

const Home = () => {
  return (
    <Grid>
      <Box>
        <RFLogo />
      </Box>
      <Grid
        container
        direction="row-reverse"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item sm={12} md={12} lg={6}>
          <img src={backgroundImage}/>
        </Grid>
        <Grid item sm={12} md={12} lg={6}>
          description here
        </Grid>
      </Grid>
      <Grid item sm={12} md={12} lg={3} direction="row">
        button here
      </Grid>
    </Grid>
  );
};

export default Home;
