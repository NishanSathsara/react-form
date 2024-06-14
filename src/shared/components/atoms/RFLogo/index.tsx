import { Box } from "@mui/material";
import logo from "../../../../assets/logo.png";

const RFLogo = () => {
  return (
    <Box pt="25px" pl="25px">
      <img src={logo} alt="Build logo" height={35}/>
    </Box>
  );
};

export default RFLogo;
