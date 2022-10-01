import { Input, InputProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props extends InputProps {
  children?: ReactNode;
  color?: string;
}

export function GlobalInput({ children, color, ...rest }: Props) {
  return (
    <Input focusBorderColor={color ? color : "purple.700"} {...rest}>
      {children}
    </Input>
  );
}
