import { Box } from "@mui/material";

const FormGrid = ({ children }: any) => {
  return (
    <Box
      display="grid"
      width={700}
      margin="auto"
      height="calc(100vh - 117px)"
      alignItems="center"
      className="testa1"
    >
      {children}
    </Box>
  );
};

export default FormGrid;
