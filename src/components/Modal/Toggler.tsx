import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useMoney } from "../../contexts/MoneyContext";
import { TogglerItem } from "./TogglerItem";

export function Toggler() {
  const { transactionType, setTransactionType } = useMoney();

  return (
    <ToggleGroup.Root
      type="single"
      value={transactionType}
      onValueChange={setTransactionType}
      style={{ gap: ".5rem", display: "flex" }}
    >
      <TogglerItem name="Entrada" value="Entrada" />
      <TogglerItem name="Comida" value="Comida" />
      <TogglerItem name="Transporte" value="Transporte" />
      <TogglerItem name="Compra" value="Compra" />
      <TogglerItem name="Conta" value="Conta" />
    </ToggleGroup.Root>
  );
}
