import { createContext, ReactNode, useContext, useState } from "react";

interface ProviderProps {
  children: ReactNode;
}

interface ShadowContextProps {
  shadow: string;
  isLightMode: boolean;
  setIsLightMode: (value: boolean) => void;
}

export const ShadowContext = createContext({} as ShadowContextProps);

export function ShadowContextProvider({ children }: ProviderProps) {
  const [isLightMode, setIsLightMode] = useState(true);
  let shadow = "";

  if (isLightMode) {
    shadow =
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";
  } else {
    shadow = "";
  }

  return (
    <ShadowContext.Provider value={{ shadow, isLightMode, setIsLightMode }}>
      {children}
    </ShadowContext.Provider>
  );
}

export function useShadow() {
  const context = useContext(ShadowContext);

  return context;
}
