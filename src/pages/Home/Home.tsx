import { Box, Grid, Typography } from "@mui/material";
import * as React from "react";
import { useState } from "react";
import backgroundImage from "../../assets/background.png";
import RFButton from "../../shared/components/atoms/RFButton";
import RFLogo from "../../shared/components/atoms/RFLogo";
import EmailForm from "../../shared/components/molecules/Form/EmailForm/EmailForm";
import NameForm from "../../shared/components/molecules/Form/NameForm/NameForm";
import RFNavigateButton from "../../shared/components/molecules/RFNavigateButton/RFNavigateButton";
import { DescriptionTypography } from "../../shared/styles";
import { theme } from "../../shared/theme";

const Home = () => {
  const [openForm, setOpenForm] = useState(false);
  const [activeStep, setActiveStep] = React.useState<number>(0);

  const showForm = () => {
    setOpenForm(true);
  };

  return (
    <Grid>
      <Box>
        <RFLogo />
      </Box>
      {!openForm && (
        <>
          <Box pt={7} pb={7} pr={10} pl={10}>
            <Grid
              container
              direction="row-reverse"
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item sm={12} md={12} lg={6}>
                <img src={backgroundImage} height="auto" width="100%" />
              </Grid>

              <Grid item sm={12} md={12} lg={6} maxWidth="720px">
                <Typography
                  fontSize="2.3rem"
                  color={theme.palette.text.primary}
                  fontWeight={600}
                >
                  Launch your Data Career in Weeks,not Years
                </Typography>
                <Box>
                  <DescriptionTypography>What to expect:</DescriptionTypography>
                  <DescriptionTypography fontSize="1.25rem">
                    -Short-answers questions & No cover letter
                  </DescriptionTypography>
                  <DescriptionTypography fontSize="1.25rem">
                    -Takes 4 mins an average
                  </DescriptionTypography>
                </Box>
                <Grid item sm={12} md={12} lg={5}>
                  <Grid container direction="row-reverse" alignItems="center">
                    <Box>
                      <RFButton
                        text="Start your Journey"
                        size="large"
                        onClick={showForm}
                      />
                    </Box>
                    <Box>
                      {/* //!! add count to peoples */}
                      <Typography color={theme.palette.text.primary}>
                        76 peoples have filled this out
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </>
      )}
      {/* change name */}
      {openForm && activeStep === 0 && (
        <Box>
          <NameForm setActiveStep={setActiveStep} />
          <RFNavigateButton
            setActiveStep={setActiveStep}
            activeStep={activeStep}
            disableUpButton={true}
          />
        </Box>
      )}
      {activeStep === 1 && (
        <Box>
          <EmailForm setActiveStep={setActiveStep} />
          <RFNavigateButton
            setActiveStep={setActiveStep}
            activeStep={activeStep}
          />
        </Box>
      )}
    </Grid>
  );
};

export default Home;
