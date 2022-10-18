import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface Props {
  children: ReactNode;
}

type DrawerContextData = UseDisclosureReturn;

const DrawerContext = createContext({} as DrawerContextData);

export function DrawerContextProvider({ children }: Props) {
  const disclosure = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    disclosure.onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath]);

  return (
    <DrawerContext.Provider value={disclosure}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);
