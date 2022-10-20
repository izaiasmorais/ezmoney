import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props extends ButtonProps {
  children?: ReactNode;
  bg?: string;
}

export function GButton({ bg, children, ...rest }: Props) {
  const { nextTheme, shadow } = useMoney();

  return (
    <Button
      bg={bg ? bg : nextTheme.back.boxes}
      boxShadow={shadow}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius="8px"
      gap={[".5rem", ".5rem", "1rem"]}
      h="40px"
      {...rest}
    >
      {children}
    </Button>
  );
}
