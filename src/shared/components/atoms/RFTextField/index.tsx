"use client";

import { Box, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Field } from "formik";
import { ReactElement, useState } from "react";
import { theme } from "../../../theme";
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { Box, Grid, IconButton, InputAdornment } from '@mui/material';

interface RFTextFieldProps {
  params?: any;
  size?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  type?: "text" | "number" | "password";
  value?: string | number | null;
  label?: string;
  name?: string;
  placeholder?: string;
  error?: string | undefined | any;
  styles?: any;
  disabled?: boolean;
  rows?: number;
  multiline?: boolean;
  onChange?: any;
  readonly?: boolean;
  endAdornment?: string | ReactElement;
  startAdornment?: string | ReactElement;
}

const RFTextfield = ({
  type = "text",
  params,
  value,
  name,
  placeholder,
  label,
  error,
  size,
  styles,
  rows,
  disabled,
  multiline,
  onChange,
  //   readonly,
  //   endAdornment,
  //   startAdornment,
}: RFTextFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <Grid xs={size} item>
        <Box component="div" display="grid" pb="48px">
          <Field name={name}>
            {({ field }: any) => (
              <TextField
                sx={{
                  ...styles,
                  // '& .MuiInputBase-root.Mui-disabled': {
                  //   backgroundColor: 'rgba(0, 0, 0, 0.1)',
                  // },
                  input: { color: "#fff" },
                  "& .MuiInputBase-root": {
                    paddingTop: "15px",
                    paddingBottom: "10px",
                    fontSize: theme.typography.fontSize,
                    color: "#cf9fff",
                  },
                  "& input::placeholder": {
                    fontSize: "1.5rem",
                    color: "#cf9fff",
                  },
                }}
                {...field}
                {...params}
                label={label}
                type={
                  type === "password"
                    ? !showPassword
                      ? "password"
                      : "text"
                    : type
                }
                size="medium"
                // id="name"
                name={name}
                fullWidth
                value={
                  type === "number" && typeof value === "number"
                    ? value <= 0
                      ? 0
                      : value
                    : value
                }
                multiline={multiline}
                rows={rows}
                variant="standard"
                disabled={disabled}
                helperText={error}
                placeholder={placeholder}
                error={error ? true : false}
                onChange={onChange}
                color="primary"
                // InputProps={{
                //   readOnly: readonly,
                //   endAdornment: endAdornment
                //     ? endAdornment
                //     : type === 'password' && (
                //         <InputAdornment position='end'>
                //           <IconButton
                //             aria-label='toggle password visibility'
                //             onClick={() => setShowPassword(!showPassword)}
                //             edge='end'
                //           >
                //             {showPassword ? (
                //               <VisibilityOff fontSize='small' />
                //             ) : (
                //               <Visibility fontSize='small' />
                //             )}
                //           </IconButton>
                //         </InputAdornment>
                //       ),
                //   startAdornment: startAdornment && (
                //     <InputAdornment position='start'>{startAdornment}</InputAdornment>
                //   ),
                // }}
              />
            )}
          </Field>
        </Box>
      </Grid>
    </>
  );
};

export default RFTextfield;
