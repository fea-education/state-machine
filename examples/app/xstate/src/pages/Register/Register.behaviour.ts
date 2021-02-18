import { createContext, useContext } from "react";

class RegisterContext {
  basePath: string;
  readonly routes: {
    readonly root: () => string;
    readonly editing: () => string;
    readonly failure: () => string;
    readonly success: () => string;
  };

  constructor(basePath: string) {
    this.basePath = basePath;
    this.routes = {
      root: () => basePath,
      editing: () => `${basePath}/editing`,
      failure: () => `${basePath}/failure`,
      success: () => `${basePath}/success`,
    };
  }
}

export function createRegisterContext({ basePath }: { basePath: string } = { basePath: "" }) {
  return new RegisterContext(basePath);
}

const Context = createContext<RegisterContext>(createRegisterContext());

export const RegisterContextProvider = Context.Provider;

export function useRegisterContext() {
  const { routes } = useContext(Context);

  return { routes };
}
