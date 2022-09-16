import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ShadowContextProps {
  shadow: string;
}

export const ShadowContext = createContext({} as ShadowContextProps);

export function ShadowContextProvider({ children }: ProviderProps) {
  function verify() {
    if (typeof window !== "undefined") {
      const mode = localStorage.getItem("chakra-ui-color-mode");

      return mode;
    }
  }

  let shadow = "";

  if (verify() === "light") {
    shadow =
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";
  } else {
    shadow = "";
  }

  return (
    <ShadowContext.Provider value={{ shadow }}>
      {children}
    </ShadowContext.Provider>
  );
}

export function useShadow() {
  const context = useContext(ShadowContext);

  return context;
}
