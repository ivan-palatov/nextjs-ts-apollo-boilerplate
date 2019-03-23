import { Field, Formik } from 'formik';
import Link from 'next/link';
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

const login = () => {
  return (
    <Layout title="Login Page">
      <LoginComponent>
        {loginMutation => (
          <Formik
            validationSchema={LoginSchema}
            validateOnBlur={false}
            onSubmit={async (data, { setErrors, setSubmitting }) => {
              try {
                await loginMutation({ variables: data });
                Router.push('/');
              } catch (err) {
                console.log(Object.entries(err));
                setErrors({ email: 'Invalid credentials or email is not confirmed' });
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
                <p>
                  <small>
                    Forgot password?{' '}
                    <Link href="/user/forgot-password">
                      <a>Change Password</a>
                    </Link>
                  </small>
                </p>
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
