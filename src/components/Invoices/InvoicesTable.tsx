import { Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import { InvoicesProps } from "../../@types/types";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceItem } from "./InvoiceItem";

interface Props {
  invoices: InvoicesProps[];
}

export function InvoicesTable({ invoices }: Props) {
  return (
    <Flex
      direction="column"
      overflowX="auto"
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <InvoiceHeader />

      {invoices.map((item) => (
        <InvoiceItem
          key={item.id}
          name={item.title}
          due={format(new Date(item.dueDate), "dd/MM/yyyy")}
          price={item.price}
          status={item.status}
        />
      ))}
    </Flex>
  );
}
