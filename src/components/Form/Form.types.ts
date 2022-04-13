import { IBase } from "@/types";
import { FormikHelpers } from "formik";

export interface FormProps extends IBase {
  data: any;
  onSubmit?: (values: {}, formikHelpers: FormikHelpers<any>) => void;
}
