import clsx from "clsx";
import { Form as FormikForm, Formik } from "formik";
import React from "react";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

import { Button, FormInput } from "@/components";
import { IBase } from "@/types";

import useStyles from "./Form.styles";
import { FormProps } from "./Form.types";

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
          onSubmit={onSubmit as any}
          validationSchema={schema}
        >
          <FormikForm>
            {data &&
              data.length &&
              data.map((item: any) => {
                return (
                  <FormInput
                    key={uuidv4()}
                    name={item.name}
                    label={item.label}
                  />
                );
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
