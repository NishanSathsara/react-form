import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { object, string } from "yup";
import FormGrid from "../../../../Layout/FormGrid";
import TitleTypography, { DescriptionTypography } from "../../../../styles";
import RFButton from "../../../atoms/RFButton";
import RFTextfield from "../../../atoms/RFTextField";

interface EmailFormProps {
  setActiveStep: (state: number) => void;
}
const EmailForm = ({ setActiveStep }: EmailFormProps) => {
  const initialValues = {
    email: "",
  };

  let userSchema = object({
    email: string().email("Hmm...that email doesn't look right"),
  });
  // !add form types to values
  const handleSubmit = async (values: FormikValues) => {
    try {
      console.log(values);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <Grid>
      <FormGrid>
        <Grid>
          <TitleTypography >What's your email address?</TitleTypography>
          <DescriptionTypography marginBottom="25px">This is how we'll contact you.</DescriptionTypography>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={(values: any, actions: any) => {
              actions.setSubmitting(false);
              handleSubmit(values);
            //   alert(JSON.stringify(values, null, 2));
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
                  <RFTextfield
                    name="firstName"
                    placeholder="name@example.com"
                    
                    value={values.email}
                    error={errors.email}
                    onChange={handleChange}
                    size={12}
                  />
                    
                  <RFButton text="OK" onClick={() => setActiveStep(2)} />
                </Box>
              </Form>
            )}
          </Formik>
          
        </Grid>
      </FormGrid>
    </Grid>
  );
};

export default EmailForm;
