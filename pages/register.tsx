import { Field, Formik, FormikActions } from 'formik';
import Router from 'next/router';
import React from 'react';
import { MutationFn } from 'react-apollo';
import * as yup from 'yup';
import InputField from '../components/fields/InputField';
import Layout from '../components/Layout';
import {
  RegisterComponent,
  RegisterMutation,
  RegisterVariables,
} from '../generated/apolloComponents';

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

interface IData {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

function onSubmitHandler(registerMutation: MutationFn<RegisterMutation, RegisterVariables>) {
  return async (data: IData, { setErrors, setSubmitting }: FormikActions<IData>) => {
    try {
      await registerMutation({ variables: data });
      Router.push('/user/check-email');
    } catch (err) {
      const errors = err.graphQLErrors[0].extensions.exception.validationErrors.reduce(
        (obj: any, err: any) => {
          obj[err.property] = Object.values(err.constraints)[0];
          return obj;
        },
        {}
      );
      setErrors(errors);
    }
    setSubmitting(false);
  };
}

const register = () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {registerMutation => (
          <Formik
            validationSchema={RegisterSchema}
            validateOnBlur={false}
            onSubmit={onSubmitHandler(registerMutation)}
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
                  Register
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
