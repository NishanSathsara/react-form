import { Box, Grid, Typography } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { object, string } from "yup";
import FormGrid from "../../../../Layout/FormGrid";
import TitleTypography from "../../../../styles";
import { theme } from "../../../../theme";
import RFButton from "../../../atoms/RFButton";
import RFLabel from "../../../atoms/RFFormLable";
import RFTextfield from "../../../atoms/RFTextField";

interface NameFormProps {
  setActiveStep: (state: number) => void;
  handleClickOk:(values:FormikValues)=>void;
}
const NameForm = ({ setActiveStep,handleClickOk }: NameFormProps) => {
  const initialValues = {
    firstName: "",
    lastName: "",
  };

  let userSchema = object({
    firstName: string().required(),
    lastName: string().required(),
  });
  // !add form types to values
  const handleSubmit = async (values: FormikValues) => {
    try {
      setActiveStep(1)
      handleClickOk(values)
      console.log(values);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Box
      // display="grid"
      // width={700}
      // margin="auto"
      // height="calc(100vh - 35px)"
      // alignItems="center"
      // className="testa1"
    >
      <FormGrid>
        <Grid>
          <TitleTypography marginBottom="30px" position="relative">
            <Typography fontSize="inherit" color={theme.palette.primary.main} sx={{position:"absolute",left:-30}}>1-</Typography> Before we start,what is your name?
          </TitleTypography>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={(values: any, actions: any) => {
              actions.setSubmitting(false);
              handleSubmit(values);
              // alert(JSON.stringify(values, null, 2));
            }}
          >
            {({ errors, values, handleChange, handleSubmit }) => (
              <Form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit(e);
                }}
              >
                <Box minWidth="50vw">
                  <RFLabel title="First Name" />
                  <RFTextfield
                    name="firstName"
                    placeholder="James"
                    type="text"
                    value={values.firstName}
                    error={errors.firstName}
                    onChange={handleChange}
                    size={12}
                  />
                  <RFLabel title="Last Name" />
                  <RFTextfield
                    name="lastName"
                    placeholder="smith"
                    type="text"
                    value={values.lastName}
                    error={errors.lastName}
                    onChange={handleChange}
                    size={12}
                  />
                  <RFButton text="OK"  type="submit"/>
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
      </FormGrid>
    </Box>
  );
};

export default NameForm;
