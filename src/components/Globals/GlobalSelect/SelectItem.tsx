import * as Select from "@radix-ui/react-select";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props {
  name: string;
  value: string;
}

export function SelectItem({ name, value }: Props) {
  const { nextTheme } = useMoney();

  return (
    <Select.Item
      value={value}
      style={{
        background: nextTheme.back.boxes,
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
  );
}
