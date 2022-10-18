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
import { ItemMenu } from "../Globals/ItemMenu";

export function ThemeSelect() {
  const { nextTheme, shadow } = useMoney();
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
        boxShadow={shadow}
        my="3"
      >
        <ItemMenu onClick={() => toggleTheme("system")}>
          <IoTvOutline size={20} /> System
        </ItemMenu>

        <ItemMenu onClick={() => toggleTheme("light")}>
          <IoSunnyOutline size={20} />
          Light
        </ItemMenu>

        <ItemMenu onClick={() => toggleTheme("dark")}>
          <IoMoonOutline size={20} /> Dark
        </ItemMenu>
      </MenuList>
    </Menu>
  );
}
