import { Box, Grid } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { object, string } from "yup";
import FormGrid from "../../../../Layout/FormGrid";
import TitleTypography from "../../../../styles";
import RFButton from "../../../atoms/RFButton";
import RFLabel from "../../../atoms/RFFormLable";
import RFTextfield from "../../../atoms/RFTextField";

interface NameFormProps {
  setActiveStep: (state: number) => void;
}
const NameForm = ({ setActiveStep }: NameFormProps) => {
  const initialValues = {
    firstName: "",
    LastName: "",
  };

  let userSchema = object({
    firstName: string().required(),
    lastName: string().required(),
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
          <TitleTypography>Before we start,what is your name?</TitleTypography>
          <Formik
            initialValues={initialValues}
            validationSchema={userSchema}
            onSubmit={(values: any, actions: any) => {
              actions.setSubmitting(false);
              handleSubmit(values);
              alert(JSON.stringify(values, null, 2));
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
                    placeholder="James"
                    type="text"
                    value={values.firstName}
                    error={errors.firstName}
                    onChange={handleChange}
                    size={12}
                  />
                  <RFButton text="OK" onClick={() => setActiveStep(1)} />
                </Box>
              </Form>
            )}
          </Formik>
        </Grid>
        
      </FormGrid>
      
    </Grid>
  );
};

export default NameForm;
