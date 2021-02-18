import { Switch, Redirect, Route } from "react-router-dom";

import NotFound from "pages/NotFound";

import { createRegisterContext, RegisterContextProvider, useRegisterContext } from "./Register.behaviour";
import Editing from "./pages/Editing";
import Failure from "./pages/Failure";
import Success from "./pages/Success";

export function Register({ basePath = "" }: { basePath: string }) {
  return (
    <RegisterContextProvider value={createRegisterContext({ basePath })}>
      <RegisterRouter />
    </RegisterContextProvider>
  );
}

function RegisterRouter() {
  const { routes } = useRegisterContext();

  return (
    <Switch>
      <Route exact from={routes.root()}>
        <Redirect to={routes.editing()} />
      </Route>
      <Route path={routes.editing()}>
        <Editing />
      </Route>
      <Route path={routes.failure()}>
        <Failure />
      </Route>
      <Route path={routes.success()}>
        <Success />
      </Route>
      <Route path={`${routes.root()}/*`}>
        <NotFound />
      </Route>
    </Switch>
  );
}
