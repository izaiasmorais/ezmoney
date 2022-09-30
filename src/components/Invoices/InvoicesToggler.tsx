import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { useMoney } from "../../contexts/MoneyContext";
import { TogglerItem } from "../Modal/TogglerItem";

export function InvoicesToggler() {
  const { invoiceType, setInvoiceType } = useMoney();

  return (
    <ToggleGroup.Root
      type="single"
      value={invoiceType}
      onValueChange={setInvoiceType}
      style={{ gap: ".5rem", display: "flex" }}
    >
      <TogglerItem name="Pago" value="paid" type={invoiceType} />
      <TogglerItem name="Não pago" value="unpaid" type={invoiceType} />
      <TogglerItem name="Atrasado" value="overdue" type={invoiceType} />
      <TogglerItem name="Adiado" value="postponed" type={invoiceType} />
    </ToggleGroup.Root>
  );
}
