import { FormLabel } from "@mui/material";

interface RFLabelProps {
  title: string;
  style?: any;
}

const RFLabel = ({ title, style }: RFLabelProps) => {
  return <FormLabel style={{ ...style }}>{title}</FormLabel>;
};

export default RFLabel;
