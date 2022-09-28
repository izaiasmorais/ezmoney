import { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";
import { Transaction } from "./Transaction";
import { useShadow } from "../../contexts/ShadowContext";
import { TransactionProps } from "../../@types/types";
import { icon } from "../../utils/conditionalFunctions";
import { formatDate } from "../../utils/formatDate";
import { ThreeDots } from "react-loader-spinner";

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
      ) : (
        <Flex align="center" justify="center">
          <ThreeDots
            height="40"
            width="40"
            radius="9"
            color="#000000"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            visible={true}
          />
        </Flex>
      )}

      {viewAll}
    </Flex>
  );
}
