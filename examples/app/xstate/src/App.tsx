import { BrowserRouter as Router, Switch, Redirect, Route } from "react-router-dom";

import NotFound from "./pages/NotFound";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact from="/">
          <Redirect to="/register" />
        </Route>
        <Route path="/register">
          <Register basePath="/register" />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
