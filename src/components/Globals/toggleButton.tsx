import { Button, useColorMode } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ToggleButton() {
  const { setColorMode } = useColorMode();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      position="absolute"
      bg="#7F3DFF"
      _hover={{ bg: "#5022ab" }}
      bottom="30px"
      right="30px"
    >
      {resolvedTheme === "light" ? (
        <FaMoon color="white" />
      ) : (
        <FaSun color="white" />
      )}
    </Button>
  );
}
