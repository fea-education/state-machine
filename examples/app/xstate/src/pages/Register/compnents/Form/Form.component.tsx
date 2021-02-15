import { ChangeEvent, FormEvent } from "react";

import { FormState, FormProperties } from "./Form.types";

interface Props {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit?: (e: FormEvent<HTMLFormElement>) => void;
  isFormValid?: boolean;
  formState?: FormState;
}

export function Form({ formState, isFormValid, onChange, onSubmit }: Props) {
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <label htmlFor={FormProperties.email}>E-Mail*</label>
        <input name={FormProperties.email} type="text" value={formState?.email.value} onChange={onChange} />
        <div>{formState?.email.error}</div>
      </fieldset>

      <fieldset>
        <label htmlFor={FormProperties.password}>Password*</label>
        <input name={FormProperties.password} type="password" value={formState?.password.value} onChange={onChange} />
        <div>{formState?.password.error}</div>
      </fieldset>

      <fieldset>
        <button type="submit" disabled={!isFormValid}>
          submit
        </button>
      </fieldset>
    </form>
  );
}
