import { FormikProps } from "formik";

type BaseData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  address: string;
};

type EmergencyContact = Pick<BaseData, "address" | "email" | "phone"> & {
  name: string;
  relationship: string;
  sameAddress: "yes" | "no";
};

export type TSignUpForm = {
  baseData: BaseData;
  emergencyContact: EmergencyContact;
};

export type TFormType = {
  formik: FormikProps<TSignUpForm>;
};
