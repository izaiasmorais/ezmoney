import { ReactNode } from "react";
import { Flex, Text } from "@chakra-ui/react";
import { Transaction } from "./Transaction";
import { useShadow } from "../../contexts/ShadowContext";
import { TransactionProps } from "../../@types/types";
import { icon } from "../../utils/conditionalFuntions";
import { formatDate } from "../../utils/formatDate";

interface TransactionTableProps {
  viewAll?: ReactNode;
  data: TransactionProps[];
}

export function TransactionsTable({ data, viewAll }: TransactionTableProps) {
  const { shadow } = useShadow();

  return (
    <Flex
      w="100%"
      direction="column"
      bg="back.boxes"
      h="max-content"
      borderRadius="1rem"
      p={["1rem", "1.5rem"]}
      gap="1.5rem"
      gridColumn={["1", "1", "1", "1 / 4"]}
      boxShadow={shadow}
    >
      {data ? (
        data.map((item) => (
          <Transaction
            key={item.id}
            title={item.title}
            description={item.description}
            type={item.type === "Salário" ? "income" : "expanse"}
            color={item.type === "Salário" ? "green.700" : "red.700"}
            bg={icon(item.type).bgColor}
            date={formatDate(item.createdAt)}
            icon={icon(item.type).icon}
            price={item.price}
          />
        ))
      ) : (
        <Text textAlign="center" color="text.paragraphy">
          Não há transações para listar
        </Text>
      )}

      {viewAll}
    </Flex>
  );
}
