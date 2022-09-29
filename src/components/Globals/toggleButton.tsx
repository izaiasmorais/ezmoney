import { Button, useColorMode } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export function ToggleButton() {
  const { setColorMode } = useColorMode();
  const { theme, setTheme } = useTheme();

  // useEffect(() => {
  //   if (theme === "light") {
  //     setColorMode("light");
  //   } else {
  //     setColorMode("dark");
  //   }
  // }, [theme]);

  function handleThemeColor() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <Button
      position="absolute"
      bg="#7F3DFF"
      _hover={{ bg: "#5022ab" }}
      bottom="30px"
      right="30px"
      onClick={handleThemeColor}
    >
      {theme === "light" ? <FaSun color="white" /> : <FaMoon color="white" />}
    </Button>
  );
}
