import { Button, useColorMode } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export function ToggleThemeButton() {
  const { setColorMode } = useColorMode();
  const { systemTheme, resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    if (systemTheme === "light") {
      setTheme("light");
      setColorMode("light");
    } else {
      setTheme("dark");
      setColorMode("dark");
    }
  }, [systemTheme]);

  function toggleTheme() {
    if (resolvedTheme === "light") {
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
