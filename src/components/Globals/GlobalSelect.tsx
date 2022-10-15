import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode,
} from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { IoMoonOutline, IoSunnyOutline, IoTvOutline } from "react-icons/io5";
import { useMoney } from "../../contexts/MoneyContext";

export function GlobalSelect() {
  const { nextTheme } = useMoney();
  const [value, setValue] = useState("system");
  const { resolvedTheme, theme, setTheme } = useTheme();
  const { setColorMode } = useColorMode();

  useEffect(() => {
    if (resolvedTheme === "light") {
      setColorMode("light");
    } else {
      setColorMode("dark");
    }
  }, [resolvedTheme]);

  function toggleTheme(value: string) {
    setValue(value);
    if (value === "light") {
      setTheme("light");
      setColorMode("light");
    } else if (value === "dark") {
      setTheme("dark");
      setColorMode("dark");
    } else {
      setTheme("system");
      setColorMode("system");
    }
  }

  return (
    <Menu>
      <MenuButton>
        {theme === "light" ? (
          <IoSunnyOutline size={20} />
        ) : theme === "dark" ? (
          <IoMoonOutline size={20} />
        ) : (
          <IoTvOutline size={20} />
        )}
      </MenuButton>

      <MenuList
        bg={nextTheme.back.boxes}
        borderColor={nextTheme.back.boxes}
        my="3"
      >
        <MenuItem
          _focus={{ bg: nextTheme.back.boxes }}
          _hover={{ bg: nextTheme.back.card }}
          display="flex"
          gap="3"
          onClick={() => toggleTheme("system")}
        >
          <IoTvOutline size={20} /> System
        </MenuItem>

        <MenuItem
          display="flex"
          gap="3"
          _hover={{ bg: nextTheme.back.card }}
          onClick={() => toggleTheme("light")}
        >
          <IoSunnyOutline size={20} />
          Light
        </MenuItem>

        <MenuItem
          display="flex"
          gap="3"
          _hover={{ bg: nextTheme.back.card }}
          onClick={() => toggleTheme("dark")}
        >
          <IoMoonOutline size={20} /> Dark
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
