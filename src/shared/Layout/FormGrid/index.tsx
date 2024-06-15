import { Grid } from "@mui/material";

const FormGrid = ({ children }: any) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      width="100vw"
      sx={{ minHeight: "100vh" }}
    >
      {children}
    </Grid>
  );
};

export default FormGrid;
