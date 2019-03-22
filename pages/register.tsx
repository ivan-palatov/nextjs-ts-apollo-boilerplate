import { Field, Formik } from 'formik';
import React from 'react';
import InputField from '../components/fields/InputField';
import Layout from '../components/Layout';
import { RegisterComponent } from '../generated/apolloComponents';

const register: React.FC = () => {
  return (
    <Layout title="Register Page">
      <RegisterComponent>
        {register => (
          <Formik
            onSubmit={async data => {
              const res = await register({ variables: data });
              console.log(res);
            }}
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              password: '',
            }}
          >
            {({ handleSubmit }) => (
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
                <button type="submit">Submit</button>
              </form>
            )}
          </Formik>
        )}
      </RegisterComponent>
    </Layout>
  );
};

export default register;
