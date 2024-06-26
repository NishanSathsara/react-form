import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { theme } from "../shared/theme";

const TitleTypography = styled(Typography)({
  color: theme.palette.text.primary,
  fontSize: "1.5rem",
  fontWeight: 500,
  
}) as typeof Typography;

const DescriptionTypography = styled(Typography)({
  color: "#191b33b3",
  fontSize: "1.25rem",
  fontWeight: 600,
}) as typeof Typography;

const ListItemTypography = styled(Typography)({
  color: "#cf9fff",
  fontSize: "1.25rem",
  fontWeight: 600,
}) as typeof Typography;

export { DescriptionTypography, ListItemTypography };
export default TitleTypography;
