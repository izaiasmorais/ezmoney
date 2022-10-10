import { Flex } from "@chakra-ui/react";
import * as Select from "@radix-ui/react-select";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props {
  name: string;
  value: string;
}

export function SelectItem({ name, value }: Props) {
  const { nextTheme } = useMoney();

  return (
    <Flex _hover={{ bg: nextTheme.back.card, borderRadius: ".3rem" }}>
      <Select.Item
        value={value}
        style={{
          padding: ".5rem 1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          width: "138px",
          outline: "none",
        }}
      >
        <Select.ItemText>{name}</Select.ItemText>
        <Select.ItemIndicator />
      </Select.Item>
    </Flex>
  );
}
