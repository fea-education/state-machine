import { Form as FormComponent } from "./Form.component";
import { FormValues, useForm } from "./Form.behaviour";

interface Props {
  onSubmit?: (values: FormValues) => void;
}

function Form({ onSubmit }: Props) {
  const formProps = useForm({ onSubmit });

  return <FormComponent {...formProps} />;
}

export * from "./Form.component";
export * from "./Form.behaviour";
export default Form;
