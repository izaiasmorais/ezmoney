import { Flex } from "@chakra-ui/react";
import { format } from "date-fns";
import { useState } from "react";
import { InvoicesProps } from "../../../@types/types";
import { GEmpty } from "../../Globals/GEmpty";
import { LoadingDots } from "../../Globals/LoadingDots";
import { InvoiceHeader } from "./InvoiceHeader";
import { InvoiceItem } from "./InvoiceItem";

interface Props {
  invoices: InvoicesProps[];
}

export function InvoicesTable({ invoices }: Props) {
  const [hasData, setHasData] = useState(true);

  setTimeout(() => {
    if (invoices.length === 0) {
      setHasData(false);
    }
  }, 0);

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

      {invoices.length > 0 ? (
        invoices.map((item) => (
          <InvoiceItem
            key={item.id}
            name={item.title}
            due={format(new Date(item.dueDate), "dd/MM/yyyy")}
            price={item.price}
            status={item.status}
          />
        ))
      ) : hasData === true ? (
        <Flex align="center" justify="center">
          <LoadingDots />
        </Flex>
      ) : (
        <GEmpty title="Não há contas para listar" />
      )}
    </Flex>
  );
}
