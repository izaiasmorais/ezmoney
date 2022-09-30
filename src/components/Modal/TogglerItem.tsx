import * as ToggleGroup from "@radix-ui/react-toggle-group";

interface Props {
  name: string;
  value: string;
  type: string;
}

export function TogglerItem({ name, value, type }: Props) {
  return (
    <ToggleGroup.Item
      value={value}
      title={value}
      style={{
        border:
          type === value ? "1px solid transparent" : "1px solid #b2b7b878",
        padding: ".5rem",
        borderRadius: ".5rem",
        fontSize: ".9rem",
        fontWeight: "600",
        background: type === value ? "#826AF9" : "inherit",
        color: type === value ? "white" : "inherit",
      }}
    >
      {name}
    </ToggleGroup.Item>
  );
}
