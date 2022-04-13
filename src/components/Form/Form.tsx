import React from "react";
import clsx from "clsx";
import { Formik, Form as FormikForm } from "formik";
import * as Yup from "yup";

import { IBase } from "@/types";

import { Button, FormInput } from "@/components";
import { FormProps } from "./Form.types";
import useStyles from "./Form.styles";

const Form: React.FC<FormProps & IBase> = ({
  testId,
  style,
  className,
  children,
  data,
  onSubmit,
}: FormProps & IBase) => {
  const classes = useStyles();

  const getSchema = () => {
    const schema: any = {};

    data.forEach((item: any) => {
      schema[item.name] = item.validation;
    });

    return schema;
  };

  const schema = Yup.object().shape(getSchema());

  return (
    <>
      <div
        data-testid={testId}
        style={style}
        className={clsx(classes.root, className)}
      >
        <Formik
          initialValues={{ firstName: "", lastName: "", email: "" }}
          onSubmit={onSubmit}
          validationSchema={schema}
        >
          <FormikForm>
            {data &&
              data.length &&
              data.map((item: any) => {
                return <FormInput name={item.name} label={item.label} />;
              })}

            <Button
              wide
              type="submit"
              onClick={() => {}}
              style={{ marginTop: "16px" }}
            >
              Submit
            </Button>
            {children}
          </FormikForm>
        </Formik>
      </div>
    </>
  );
};

export default Form;
