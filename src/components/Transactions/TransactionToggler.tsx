import { useBreakpointValue } from "@chakra-ui/react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useMoney } from "../../contexts/MoneyContext";
import { TogglerItem } from "../Modal/TogglerItem";

export function TransactionToggler() {
  const { transactionType, setTransactionType } = useMoney();

  const breakPoint = useBreakpointValue({ base: true, md: false });

  return (
    <ToggleGroup.Root
      type="single"
      value={transactionType}
      onValueChange={setTransactionType}
      style={{
        gap: ".5rem",
        display: breakPoint ? "grid" : "flex",
        gridTemplateColumns: "1fr 1fr 1fr 1fr",
      }}
    >
      <TogglerItem name="Entrada" value="Entrada" type={transactionType} />
      <TogglerItem name="Comida" value="Comida" type={transactionType} />
      <TogglerItem
        name="Transporte"
        value="Transporte"
        type={transactionType}
      />
      <TogglerItem name="Compra" value="Compra" type={transactionType} />
      <TogglerItem name="Conta" value="Conta" type={transactionType} />
    </ToggleGroup.Root>
  );
}
