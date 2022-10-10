import * as Select from "@radix-ui/react-select";
import { FiChevronDown } from "react-icons/fi";
import { SelectItem } from "./SelectItem";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Flex, useColorMode } from "@chakra-ui/react";
import { IoMoonOutline, IoSunnyOutline, IoTvOutline } from "react-icons/io5";
import { useMoney } from "../../../contexts/MoneyContext";

export function GlobalSelect() {
  const { shadow, nextTheme } = useMoney();
  const { systemTheme, theme, setTheme } = useTheme();
  const { setColorMode } = useColorMode();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (value === "system") setColorMode(theme);
  }, [systemTheme]);

  const SelectValue =
    theme === "light" ? "Light" : theme === "dark" ? "Dark" : "System";

  function ToggleTheme(value: string) {
    setValue(value);
    if (value === "dark") {
      setTheme("dark");
      setColorMode("dark");
    } else if (value === "light") {
      setTheme("light");
      setColorMode("light");
    } else {
      setTheme("system");
      setColorMode(systemTheme);
    }
  }

  const margin = value === "system" ? "2.5rem" : "4rem";

  return (
    <Select.Root value={value} onValueChange={ToggleTheme}>
      <Select.Trigger
        style={{
          display: "flex",
          alignItems: "center",
          gap: ".5rem",
          boxShadow: shadow,
          padding: ".5rem 1rem",
          borderRadius: ".5rem",
          outline: "none",
        }}
      >
        <Select.Value>
          <Flex gap=".5rem" align="center">
            {theme === "light" ? (
              <IoSunnyOutline />
            ) : theme === "dark" ? (
              <IoMoonOutline />
            ) : (
              <IoTvOutline />
            )}

            {SelectValue}
          </Flex>
        </Select.Value>
        <FiChevronDown />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          style={{
            marginTop: margin,
            boxShadow: shadow,
            borderRadius: ".3rem",
            background: nextTheme.back.boxes,
          }}
        >
          <Select.Viewport>
            <SelectItem name="System" value="system" />
            <SelectItem name="Light" value="light" />
            <SelectItem name="Dark" value="dark" />
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
