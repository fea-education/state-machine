import { Switch, Redirect, Route } from "react-router-dom";

import NotFound from "../NotFound";

import Editing from "./pages/Editing";
import Failure from "./pages/Failure";
import Success from "./pages/Success";

export function Register({ basePath = "" }: { basePath: string }) {
  return (
    <Switch>
      <Route exact from={`${basePath}/`}>
        <Redirect to={`${basePath}/editing`} />
      </Route>
      <Route path={`${basePath}/editing`}>
        <Editing />
      </Route>
      <Route path={`${basePath}/failure`}>
        <Failure />
      </Route>
      <Route path={`${basePath}/success`}>
        <Success />
      </Route>
      <Route path={`${basePath}/*`}>
        <NotFound />
      </Route>
    </Switch>
  );
}
