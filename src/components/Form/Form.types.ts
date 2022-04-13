import { FormikHelpers } from "formik";

import { IBase } from "@/types";

export interface FormProps extends IBase {
  data: any;
  onSubmit?: (values: {}, formikHelpers: FormikHelpers<any>) => void;
}
