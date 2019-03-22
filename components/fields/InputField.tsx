import { FieldProps } from 'formik';
import React from 'react';

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const InputField: React.FC<FieldProps & InputProps> = ({ field, form, ...props }) => (
  <div>
    <input {...field} {...props} />
  </div>
);

export default InputField;
