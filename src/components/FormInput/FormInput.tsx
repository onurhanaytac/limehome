import React from "react";
import clsx from "clsx";

import { IBase } from "@/types";

import { FormInputProps } from "./FormInput.types";
import useStyles from "./FormInput.styles";
import { ErrorMessage, Field } from "formik";

const FormInput: React.FC<FormInputProps & IBase> = ({
  testId,
  style,
  className,
  name,
  placeholder,
  type,
  label,
}: FormInputProps & IBase) => {
  const classes = useStyles();

  return (
    <>
      <div
        data-testid={testId}
        style={style}
        className={clsx(classes.root, className)}
      >
        <label htmlFor={name} className={classes.label}>
          {label}
        </label>
        <Field name={name}>
          {({ field }: any) => {
            return (
              <input
                {...field}
                className={classes.input}
                name={name}
                placeholder={placeholder || label}
                type={type}
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
              />
            );
          }}
        </Field>

        <ErrorMessage name={name} component="div" className={classes.error} />
      </div>
    </>
  );
};

export default FormInput;
