import { ReactNode, useState } from "react";
import { Flex } from "@chakra-ui/react";
import { Transaction } from "./Transaction";
import { useMoney } from "../../../contexts/MoneyContext";
import { TransactionProps } from "../../../@types/types";
import { icon } from "../../../utils/conditionalFunctions";
import { formatDate } from "../../../utils/formatDate";
import { LoadingDots } from "../../Globals/LoadingDots";
import { GEmpty } from "../../Globals/GEmpty";

interface TransactionTableProps {
  component?: ReactNode;
  data: TransactionProps[];
}

export function TransactionsTable({ data, component }: TransactionTableProps) {
  const [hasData, setHasData] = useState(true);
  const { shadow, nextTheme } = useMoney();

  setTimeout(() => {
    if (data.length === 0) {
      setHasData(false);
    }
  }, 0);

  return (
    <Flex
      w="100%"
      direction="column"
      bg={nextTheme.back.boxes}
      h="max-content"
      borderRadius="1rem"
      p={["1rem", "1.5rem"]}
      gap="1.5rem"
      gridColumn={["1", "1", "1", "1 / 4"]}
      boxShadow={shadow}
    >
      {data.length > 0 ? (
        data.map((item) => (
          <Transaction
            key={item.id}
            title={item.title}
            description={item.description}
            type={item.type === "Entrada" ? "income" : "expanse"}
            color={item.type === "Entrada" ? "green.700" : "red.700"}
            date={formatDate(item.createdAt)}
            bg={icon(item.type)?.bgColor}
            icon={icon(item.type)?.icon}
            price={item.price}
          />
        ))
      ) : hasData === true ? (
        <Flex align="center" justify="center">
          <LoadingDots />
        </Flex>
      ) : (
        <GEmpty title="Não há transações para listar" />
      )}

      {component}
    </Flex>
  );
}
