import { Field, Formik } from 'formik';
import Router from 'next/router';
import React from 'react';
import * as yup from 'yup';
import InputField from '../components/fields/InputField';
import Layout from '../components/Layout';
import { LoginComponent } from '../generated/apolloComponents';

const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(6)
    .max(75)
    .required(),
});

const login: React.FC = () => {
  return (
    <Layout title="Login Page">
      <LoginComponent>
        {login => (
          <Formik
            validationSchema={LoginSchema}
            validateOnBlur={false}
            onSubmit={async (data, { setErrors, setSubmitting }) => {
              try {
                await login({ variables: data });
                Router.push('/');
              } catch (err) {
                setErrors({ email: 'Invalid email or password' });
              }
              setSubmitting(false);
            }}
            initialValues={{
              email: '',
              password: '',
            }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit}>
                <Field name="email" placeholder="Email" component={InputField} />
                <Field
                  name="password"
                  placeholder="Password"
                  type="password"
                  component={InputField}
                />
                <button type="submit" disabled={isSubmitting}>
                  Login
                </button>
              </form>
            )}
          </Formik>
        )}
      </LoginComponent>
    </Layout>
  );
};

export default login;
