import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useMoney } from "../../contexts/MoneyContext";

interface Props {
  name: string;
  value: string;
}

export function TogglerItem({ name, value }: Props) {
  const { transactionType } = useMoney();

  return (
    <ToggleGroup.Item
      value={value}
      title={value}
      style={{
        border:
          transactionType === value
            ? "1px solid transparent"
            : "1px solid #b2b7b878",
        padding: ".5rem",
        borderRadius: ".5rem",
        fontSize: ".9rem",
        fontWeight: "600",
        background: transactionType === value ? "#826AF9" : "inherit",
        color: transactionType === value ? "white" : "inherit",
      }}
    >
      {name}
    </ToggleGroup.Item>
  );
}
