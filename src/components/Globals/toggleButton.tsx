import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

interface Props {
  isLight: boolean;
  toggleFunction: () => void;
}

export function ToggleButton({ isLight, toggleFunction }: Props) {
  const { colorMode, toggleColorMode } = useColorMode();

  function handleToggleColorMode() {
    toggleFunction();
    toggleColorMode();
  }

  return (
    <Button
      position="absolute"
      colorScheme="purple"
      bottom="30px"
      right="30px"
      onClick={handleToggleColorMode}
    >
      {isLight ? <FaSun /> : <FaMoon />}
    </Button>
  );
}
