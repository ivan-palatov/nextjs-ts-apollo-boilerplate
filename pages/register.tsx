import { Field, Formik } from 'formik';
import React from 'react';
import * as yup from 'yup';
import InputField from '../components/fields/InputField';
import Layout from '../components/Layout';
import { RegisterComponent } from '../generated/apolloComponents';

const RegisterSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  firstName: yup
    .string()
    .min(2)
    .max(255)
    .required(),
  lastName: yup
    .string()
    .min(2)
    .max(255)
    .required(),
  password: yup
    .string()
    .min(6)
    .max(75)
    .required(),
});

const register: React.FC = () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {register => (
          <Formik
            validationSchema={RegisterSchema}
            validateOnBlur={false}
            onSubmit={async (data, { setErrors, setSubmitting }) => {
              try {
                const res = await register({ variables: data });
                console.log(res);
              } catch (err) {
                const errors = err.graphQLErrors[0].extensions.exception.validationErrors.reduce(
                  (obj: any, err: any) => {
                    obj[err.property] = Object.values(err.constraints)[0];
                    return obj;
                  },
                  {}
                );
                setErrors(errors);
                console.log(errors);
              }
              setSubmitting(false);
            }}
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email" placeholder="Email" component={InputField} />
                <Field name="firstName" placeholder="First Name" component={InputField} />
                <Field name="lastName" placeholder="Last Name" component={InputField} />
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};

export default register;
