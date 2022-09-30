import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useMoney } from "../../contexts/MoneyContext";

interface Props extends FlexProps {
  children: ReactNode;
}

export function MoneyBox({ children, ...rest }: Props) {
  const { nextTheme, shadow } = useMoney();

  return (
    <Flex
      bg={nextTheme.back.boxes}
      boxShadow={shadow}
      borderRadius="1rem"
      p="1rem"
      {...rest}
    >
      {children}
    </Flex>
  );
}
