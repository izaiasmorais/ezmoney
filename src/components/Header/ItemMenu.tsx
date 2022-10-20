import { MenuItem, MenuItemProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useMoney } from "../../contexts/MoneyContext";

interface Props extends MenuItemProps {
  children?: ReactNode;
}

export function ItemMenu(props: Props) {
  const { nextTheme } = useMoney();

  return (
    <MenuItem
      _focus={{ bg: nextTheme.back.boxes }}
      _hover={{ bg: nextTheme.back.card }}
      display="flex"
      gap="3"
      borderRadius=".5rem"
      {...props}
    >
      {props.children}
    </MenuItem>
  );
}
