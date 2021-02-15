export enum FormProperties {
  email = "email",
  password = "password",
}

export type FormKeys = FormProperties.email | FormProperties.password;
export type FormState = { [K in FormKeys]: { error?: string; value: string } };
