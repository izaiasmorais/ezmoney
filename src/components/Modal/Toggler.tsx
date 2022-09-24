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
      style={{ gap: ".3rem", display: "flex" }}
    >
      <TogglerItem name="Comida" value="Comida" />
      <TogglerItem name="Transporte" value="Transporte" />
      <TogglerItem name="Contas" value="Contas" />
      <TogglerItem name="Salário" value="Salário" />
      <TogglerItem name="Compras" value="Compras" />
    </ToggleGroup.Root>
  );
}
