import {
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import { useState } from "react";
import FormGrid from "../../../../Layout/FormGrid";
import TitleTypography, { DescriptionTypography } from "../../../../styles";
import RFButton from "../../../atoms/RFButton";

interface LanguageFormProps {
  setActiveStep: (state: number) => void;
}
interface LanguageTypes {
  name: string;
  checked: boolean;
}
const LanguageForm = ({ setActiveStep }: LanguageFormProps) => {
  const [languages, setLanguages] = useState<LanguageTypes[]>([
    { name: "Solidity", checked: false },
    { name: "Rust", checked: false },
    { name: "Node.js", checked: false },
    { name: "Typescript", checked: false },
    { name: "Javascript", checked: false },
    { name: "C", checked: false },
    { name: "C++", checked: false },
    { name: "C#", checked: false },
    { name: "SQL", checked: false },
    { name: "Python", checked: false },
    { name: "Assembly Language", checked: false },
    { name: "Haskell", checked: false },
    { name: "R", checked: false },
    { name: ".NET", checked: false },
  ]);
  return (
    <FormGrid>
      <Grid>
        <TitleTypography>
          What languages and frameworks are you familiar with?
        </TitleTypography>
        <DescriptionTypography marginBottom="30px">
          Select all the languages you know.
        </DescriptionTypography>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          width="55vw"
          spacing={2}
          pb="12px"
        >
          {languages.map((language) => (
            <Grid item xs={6} sm={4} key={language.name}>
              <Paper
                elevation={0}
                sx={{
                  border: "1px solid #cf9fff",
                  textAlign: "left",
                  bgcolor: "#cf9fff1a",
                  pl:2
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox  onChange={() => {}} name={language.name} />
                  }
                  label={language.name}
                  sx={{
                    "& .MuiTypography-root": {
                      color: "#cf9fff",
                      fontSize: "1.25rem",
                    },
                  }}
                />
              </Paper>
            </Grid>
          ))}
          <Grid item xs={6} sm={4}>
            <TextField label="Other" variant="outlined" fullWidth />
          </Grid>
        </Grid>
        <RFButton text="OK" onClick={() => setActiveStep(3)} />
      </Grid>
    </FormGrid>
  );
};

export default LanguageForm;
