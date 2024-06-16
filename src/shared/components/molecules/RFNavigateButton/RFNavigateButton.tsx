import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ButtonGroup, Grid } from "@mui/material";
import RFButton from "../../atoms/RFButton";
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

interface RFNavigateButtonProps {
  setActiveStep?: any;
  activeStep?: any;
  disableUpButton?:boolean
  disableDownButton?:boolean
}
const RFNavigateButton = ({
  setActiveStep,
  activeStep,
  disableUpButton,
  disableDownButton
}: RFNavigateButtonProps) => {
  return (
    <Grid sx={{position:"fixed", bottom:0}} container direction="row-reverse" pr="20px" pb="20px">
      <ButtonGroup>
        <RFButton
          text=""
          disabled={disableUpButton}
          startIcon={<KeyboardArrowUpIcon />}
          onClick={() => setActiveStep(activeStep--)}
        />
        <RFButton
          text=""
          disabled={disableDownButton}
          startIcon={<KeyboardArrowDownIcon />}
          onClick={() => setActiveStep(activeStep++)}
        />
      </ButtonGroup>
    </Grid>
  );
};

export default RFNavigateButton;
