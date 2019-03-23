import { Field, Formik } from 'formik';
import React, { useState } from 'react';
import * as yup from 'yup';
import InputField from '../../components/fields/InputField';
import Layout from '../../components/Layout';
import { ForgotPasswordComponent } from '../../generated/apolloComponents';

const ForgotPasswordSchema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
});

const forgotPassword = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  return (
    <Layout title="Forgot Password">
      <ForgotPasswordComponent>
        {forgotPasswordMutation => (
          <Formik
            validationSchema={ForgotPasswordSchema}
            validateOnBlur={false}
            onSubmit={async (data, { setErrors, setSubmitting }) => {
              try {
                await forgotPasswordMutation({ variables: data });
                setIsSubmitted(true);
              } catch (err) {
                console.log(Object.entries(err));
                setErrors({ email: "Email doesnt exis't or wasn't confirmed" });
              }
              setSubmitting(false);
            }}
            initialValues={{ email: '' }}
          >
            {({ handleSubmit, isSubmitting }) => (
              <>
                <h3>On this email address would be sent instructions to restore your password</h3>
                {isSubmitted ? <p>Futher instructions were send, check your email</p> : null}
                <form onSubmit={handleSubmit}>
                  <Field name="email" component={InputField} />
                  <button type="submit" disabled={isSubmitting}>
                    Send Email
                  </button>
                </form>
              </>
            )}
          </Formik>
        )}
      </ForgotPasswordComponent>
    </Layout>
  );
};

export default forgotPassword;
