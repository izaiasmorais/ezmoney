import { Box, useRadio } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export function RadioCard({ children }: Props) {
  const { getInputProps, getCheckboxProps } = useRadio();

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderRadius=".5rem"
        border={"1px solid #b5c2cd84"}
        _checked={{
          bg: "purple.700",
          color: "white",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        px={1.5}
        py={2}
      >
        {children}
      </Box>
    </Box>
  );
}
