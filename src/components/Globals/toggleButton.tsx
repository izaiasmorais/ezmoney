import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useShadow } from "../../contexts/ShadowContext";

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
