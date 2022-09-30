import { Button, useColorMode } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export function ToggleButton() {
  const { setColorMode } = useColorMode();
  const { theme, resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
      setColorMode("dark");
    } else {
      setTheme("light");
      setColorMode("light");
    }
  }

  return (
    <Button
      bg="transparent"
      mr="-1rem"
      _hover={{ bg: "transaparent" }}
      _active={{ bg: "transaparent" }}
      onClick={toggleTheme}
    >
      {resolvedTheme === "light" ? (
        <IoMoonOutline color="black" size={20} />
      ) : (
        <IoSunnyOutline color="white" size={20} />
      )}
    </Button>
  );
}
