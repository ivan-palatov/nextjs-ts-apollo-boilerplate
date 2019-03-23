import { Field, Formik } from 'formik';
import Router from 'next/router';
import React from 'react';
import * as yup from 'yup';
import InputField from '../../components/fields/InputField';
import Layout from '../../components/Layout';
import { ChangePasswordComponent } from '../../generated/apolloComponents';
import { IMyContext } from '../../interfaces/MyContext';

const ChangePasswordSchema = yup.object().shape({
  password: yup
    .string()
    .min(6)
    .max(75)
    .required(),
});

interface IToken {
  token: string;
}

class ChangePassword extends React.Component<IToken> {
  static async getInitialProps({ query: { token } }: IMyContext) {
    return { token };
  }

  render() {
    return (
      <Layout title="Change Password">
        <ChangePasswordComponent>
          {changePasswordMutation => (
            <Formik
              validationSchema={ChangePasswordSchema}
              validateOnBlur={false}
              onSubmit={async (data, { setErrors, setSubmitting }) => {
                try {
                  await changePasswordMutation({ variables: { ...data, token: this.props.token } });
                  Router.push('/');
                } catch (err) {
                  console.log(Object.entries(err));
                  setErrors({ password: 'Invalid password or bad token' });
                }
                setSubmitting(false);
              }}
              initialValues={{ password: '' }}
            >
              {({ handleSubmit, isSubmitting }) => (
                <>
                  <form onSubmit={handleSubmit}>
                    <Field name="password" component={InputField} />
                    <button type="submit" disabled={isSubmitting}>
                      Change Password
                    </button>
                  </form>
                </>
              )}
            </Formik>
          )}
        </ChangePasswordComponent>
      </Layout>
    );
  }
}

export default ChangePassword;
