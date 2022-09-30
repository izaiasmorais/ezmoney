import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  bgColor: string;
  textColor: string;
  children: ReactNode;
  grid: string[];
}

export function StatusBox({ children, textColor, bgColor, grid }: Props) {
  return (
    <Text
      gridColumn={grid}
      bg={bgColor}
      w="max-content"
      py=".3rem"
      px=".5rem"
      color={textColor}
      fontWeight={700}
      borderRadius=".5rem"
      fontSize=".85rem"
    >
      {children}
    </Text>
  );
}
