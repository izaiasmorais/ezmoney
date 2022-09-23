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
      <TogglerItem name="Comida" value="comida" />
      <TogglerItem name="Transporte" value="transporte" />
      <TogglerItem name="Contas" value="contas" />
      <TogglerItem name="Salário" value="salario" />
      <TogglerItem name="Compras" value="compras" />
    </ToggleGroup.Root>
  );
}
