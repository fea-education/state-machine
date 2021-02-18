import { useHistory } from "react-router-dom";

import { wait } from "common/utils";
import Form, { FormValues } from "pages/Register/components/Form";
import { useRegisterContext } from "pages/Register";

export function Editing() {
  const history = useHistory();
  const { routes } = useRegisterContext();

  const register = async (values: FormValues) => {
    console.log("Submitting registration values...", values);
    await wait(2000);
    if (Math.random() > 0.5) {
      console.log("Registration successful!");
      history.push(routes.success());
    } else {
      console.log("Oops, something went wrong during the registration!", routes.failure());
      history.push(routes.failure());
    }
  };

  return <Form onSubmit={register} />;
}
