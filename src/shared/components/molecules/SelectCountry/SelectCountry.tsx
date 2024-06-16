import Autocomplete from "@mui/material/Autocomplete";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Field } from "formik";
import { ListItemTypography } from "../../../styles";

interface CountrySelectProps {
  options: any[];

  onChange?: any;
  // selectedValue?: any;
  error?: string | undefined | any;
  value?: string;
  name: string;
}
const CountrySelect = ({
  options,
  onChange,
  error,
  value,
  name,
}: CountrySelectProps) => {
  return (
    <Box pb="15px">
      <Field name={name}>
        {({ field }: any) => (
          <Autocomplete
          // getOptionSelected={(option:any, value:any) => option.label === value.code}
            fullWidth
            options={options}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                {...props}
                // key={props.key}
                component="li"
                bgcolor="#cf9fff1a"
                height="52px"
                sx={{ p: 2, border: "0.5px solid #cf9fff" }}
              >
                <ListItemTypography>{option.label}</ListItemTypography>
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...field}
                {...params}
                placeholder="Select an option"
                variant="standard"
                onChange={onChange}
                error={error ? true : false}
                value={value}
                //   label="Choose a country"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
                sx={{
                  // input: { color: "#fff" },
                  "& .MuiInputBase-root": {
                    paddingTop: "15px",
                    paddingBottom: "5px",
                    fontSize: "1.5rem",
                    color: "#cf9fff",
                  },
                  "& input::placeholder": {
                    fontSize: "1.5rem",
                    color: "#cf9fff",
                  },
                }}
              />
            )}
          />
        )}
      </Field>
    </Box>
  );
};
export default CountrySelect;
