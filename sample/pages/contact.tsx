import React from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  Select,
  useToast,
  FormErrorMessage
} from '@chakra-ui/react';
import { Formik, Form, Field, FieldInputProps, FormikErrors, FormikTouched } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  title: string;
  name: string;
  surname: string;
  telephone: string;
  message: string;
  [key: string]: string;
}

const initialValues: FormValues = {
  title: '',
  name: '',
  surname: '',
  telephone: '',
  message: '',
  email: '',
};

const ContactSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  name: Yup.string().required('Name is required'),
  surname: Yup.string().required('Surname is required'),
  telephone: Yup.string()
    .matches(/^(\+?\d{2,3})?\d+$/, 'Must be a valid phone number')
    .required('Required'),
  email: Yup.string()
    .email('Must be a valid email')
    .required('Required'),
  message: Yup.string().required('Message is required'),
});

interface FieldConfig {
  name: string;
  label: string;
  type: string;
  options?: { value: string; label: string }[];
}

const fields: FieldConfig[] = [
  {
    name: 'title',
    label: 'Title',
    type: 'select',
    options: [
      { value: 'Mr', label: 'Mr' },
      { value: 'Mrs', label: 'Mrs' },
      { value: 'Miss', label: 'Miss' },
      { value: 'Dr', label: 'Dr' },
    ],
  },
  { name: 'name', label: 'Name', type: 'text' },
  { name: 'surname', label: 'Surname', type: 'text' },
  { name: 'telephone', label: 'Telephone', type: 'tel' },
  { name: 'email', label: 'Email', type: 'email' },
  { name: 'message', label: 'Message', type: 'textarea' },
];

const renderFormControl = (
  fieldConfig: FieldConfig,
  field: FieldInputProps<string>,
  errors: FormikErrors<FormValues>,
  touched: FormikTouched<FormValues>
) => {
  switch (fieldConfig.type) {
    case 'select':
      return (
        <>
          <Select {...field}>
            <option value="" disabled>
              Select your {fieldConfig.label.toLowerCase()}
            </option>
            {fieldConfig.options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Select>
          {errors[fieldConfig.name] && touched[fieldConfig.name] && (
            <FormErrorMessage>{errors[fieldConfig.name]}</FormErrorMessage>
          )}
        </>
      );
    case 'textarea':
      return (
        <>
          <Textarea
            {...field}
            id={fieldConfig.name}
            placeholder={fieldConfig.label}
            isInvalid={!!(errors[fieldConfig.name] && touched[fieldConfig.name])}
          />
          {errors[fieldConfig.name] && touched[fieldConfig.name] && (
            <FormErrorMessage>{errors[fieldConfig.name]}</FormErrorMessage>
          )}
        </>
      );
    default:
      return (
        <>
          <Input
            {...field}
            id={fieldConfig.name}
            type={fieldConfig.type}
            placeholder={fieldConfig.label}
            isInvalid={!!(errors[fieldConfig.name] && touched[fieldConfig.name])}
          />
          {errors[fieldConfig.name] && touched[fieldConfig.name] && (
            <FormErrorMessage>{errors[fieldConfig.name]}</FormErrorMessage>
          )}
        </>
      );
  }
};

const ContactUs: React.FC = () => {
  const toast = useToast();

  const onSubmit = (values: FormValues) => {
    console.log(values);

    toast({
      title: 'Submitted',
      description: 'Your form has been submitted',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container>
      <Box>
        <Formik<FormValues>
          initialValues={initialValues}
          validationSchema={ContactSchema}
          onSubmit={onSubmit}
        >
          {({ errors, touched, isValid }) => (
        <Form>
          <VStack spacing={4}>
            {fields.map((fieldConfig) => (
              <Field key={fieldConfig.name} name={fieldConfig.name}>
                {({ field }: { field: FieldInputProps<string> }) => (
                  <FormControl
                    isInvalid={!!(errors[fieldConfig.name] && touched[fieldConfig.name])}
                    id={fieldConfig.name}
                  >
                    <FormLabel htmlFor={fieldConfig.name}>
                      {fieldConfig.label}
                    </FormLabel>
                    {renderFormControl(fieldConfig, field, errors, touched)}
                  </FormControl>
                )}
              </Field>
            ))}
            <Button
              type="submit"
              colorScheme="blue"
              mt={4}
              isDisabled={!isValid}
            >
              Submit
            </Button>
          </VStack>
        </Form>
      )}
    </Formik>
  </Box>
</Container>

);
};

export default ContactUs;
