import { FieldProps } from 'formik';
import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField: React.FC<FieldProps & InputProps> = ({
  field,
  form: { errors, touched },
  ...props
}) => {
  const errorMessage = touched[field.name] && errors[field.name];
  return (
    <div>
      <input {...field} {...props} />
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
    </div>
  );
};

export default InputField;
