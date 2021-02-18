import { ChangeEvent, FormEvent, useCallback, useEffect, useMemo, useState } from "react";

import { getEmailError, getPasswordError } from "pages/Register/validators";
import { FormKeys, FormProperties, FormState } from "./Form.types";

export type FormValues = { [K in FormKeys]: string };

function createInitialFormState(): FormState {
  return Object.keys(FormProperties).reduce(
    (formState, key) => ({ ...formState, [key]: { value: "" } }),
    {}
  ) as FormState;
}

interface Props {
  onSubmit?: (values: FormValues) => void;
}

export function useForm({ onSubmit }: Props) {
  const [formState, setFormState] = useState<FormState>(createInitialFormState);
  const isFormValid = useMemo(
    () => Object.values(formState).filter(({ error }) => error && error.length > 0).length === 0,
    [formState]
  );

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (isFormValid && onSubmit) {
        const form = (e.target as unknown) as { email: { value: string }; password: { value: string } };
        onSubmit({ email: form.email.value, password: form.password.value });
      }
    },
    [onSubmit]
  );

  const handleChange = useCallback((name: string, value: string) => {
    const getError = (() => {
      switch (name) {
        case FormProperties.email:
          return getEmailError;
        case FormProperties.password:
          return getPasswordError;
        default:
          return () => undefined;
      }
    })();

    const error = getError(value);
    setFormState((formState) => ({ ...formState, [name]: { error, value } }));
  }, []);

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      handleChange(name, value);
    },
    [handleChange]
  );

  useEffect(() => {
    handleChange(FormProperties.email, "");
    handleChange(FormProperties.password, "");
  }, []);

  return { formState, isFormValid, onChange, onSubmit: handleSubmit };
}
