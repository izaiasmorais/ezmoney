import { Flex, SimpleGrid } from "@chakra-ui/react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaExchangeAlt,
} from "react-icons/fa";
import { useMoney } from "../../contexts/MoneyContext";
import { ResumeBox } from "./ResumeBox";
import { TotalBox } from "./TotalBox";

export function Summary() {
  const { transactions } = useMoney();

  const summary =
    transactions &&
    transactions.reduce(
      (acc, transaction) => {
        if (transaction.type === "Entrada") {
          acc.deposits += Number(transaction.price);
          acc.total += Number(transaction.price);
        } else {
          acc.withdraws += Number(transaction.price);
          acc.total -= Number(transaction.price);
        }

        return acc;
      },
      {
        deposits: 0,
        withdraws: 0,
        total: 0,
      }
    );

  return (
    <SimpleGrid
      gap="1.5rem"
      gridTemplateColumns={[
        "1fr",
        "1fr 1fr",
        "1fr 1fr",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
        "repeat(4, 1fr)",
      ]}
    >
      <ResumeBox
        name="Entradas"
        value={summary ? Number(summary.deposits.toFixed(2)) : 0}
        icon={<FaArrowCircleDown size={25} color="#0CDF92" />}
      />
      <ResumeBox
        name="Saídas"
        value={summary ? Number(summary.withdraws.toFixed(2)) : 0}
        icon={<FaArrowCircleUp size={25} color="#FD3C4A" />}
      />
      <ResumeBox
        name="Transferências"
        value={0}
        icon={<FaExchangeAlt size={20} color="#45B1FF" />}
      />
      <Flex gap="1rem" direction="column">
        <TotalBox total={summary ? Number(summary.total.toFixed(2)) : 0} />
      </Flex>
    </SimpleGrid>
  );
}
