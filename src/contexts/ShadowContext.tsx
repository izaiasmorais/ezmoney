import { useColorMode } from "@chakra-ui/react";
import { createContext, ReactNode, useContext } from "react";

interface ShadowContextProps {
  shadow: string;
}

interface ProviderProps {
  children: ReactNode;
}

export const ShadowContext = createContext({} as ShadowContextProps);

export function ShadowContextProvider({ children }: ProviderProps) {
  const { colorMode } = useColorMode();
  let shadow = "";

  if (colorMode === "light") {
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
