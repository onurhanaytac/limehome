import { IBase } from "@/types";

export interface FormInputProps extends IBase {
  name: string;
  label?: string;
  placeholder?: string;
  type?: string;
}
