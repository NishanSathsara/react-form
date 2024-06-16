import { Box } from "@mui/material";
import { Form, Formik, FormikValues } from "formik";
import { object, string } from "yup";
import { countries } from "../../../../../assets/countries";
import FormGrid from "../../../../Layout/FormGrid";
import TitleTypography from "../../../../styles";
import RFButton from "../../../atoms/RFButton";
import CountrySelect from "../../SelectCountry/SelectCountry";

interface SelectCountryFormProps {
  setActiveStep: (state: number) => void;
  handleClickOk: (values: FormikValues) => void;
}

const SelectCountryForm = ({
  setActiveStep,
  handleClickOk,
}: SelectCountryFormProps) => {
  const initialValues = {
    country: "",
  };

  let userSchema = object({
    country: string(),
  });
  // !add form types to values
  const handleSubmit = async (values: FormikValues) => {
    try {
      setActiveStep(2);
      handleClickOk(values);
      console.log(values);
    } catch (error: any) {
      console.log(error);
    }
  };
  return (
    <FormGrid>
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
              {/* //!add 3 home emoji */}
              <TitleTypography marginBottom="20px">
                Which country are you from?
              </TitleTypography>
              <CountrySelect
                error={errors}
                value={values.country}
                onChange={handleChange}
                name="country"
                options={countries.map((item, _index) => ({
                  label: item.label,
                  value: item.code,
                }))}
              />
              <RFButton text="OK" type="submit" />
            </Box>
          </Form>
        )}
      </Formik>
    </FormGrid>
  );
};

export default SelectCountryForm;
