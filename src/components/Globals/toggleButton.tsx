import { Button, useColorMode } from "@chakra-ui/react";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  isLight: boolean;
  toggler: (value: boolean) => void;
}

export function ToggleButton({ isLight, toggler }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    const mode = localStorage.getItem("chakra-ui-color-mode");

    if (mode === "light") {
      toggler(true);
    } else {
      toggler(false);
    }
  }, []);

  function handleToggleColorMode() {
    toggleColorMode();
    if (isLight) {
      toggler(false);
    } else {
      toggler(true);
    }
  }

  return (
    <Button
      position="absolute"
      bg="#7F3DFF"
      _hover={{ bg: "#5022ab" }}
      bottom="30px"
      right="30px"
      onClick={handleToggleColorMode}
    >
      {isLight ? <FaSun color="white" /> : <FaMoon color="white" />}
    </Button>
  );
}
