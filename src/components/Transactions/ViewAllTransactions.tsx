import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { useMoney } from "../../contexts/MoneyContext";

export function ViewAllTransactions() {
  const { nextTheme } = useMoney();
  return (
    <Link href="/transactions">
      <Flex
        align="center"
        justify="flex-end"
        gap=".5rem"
        cursor="pointer"
        fontSize=".9rem"
        color={nextTheme.text.paragraphy}
      >
        <Text fontWeight={600}>Ver todas as transações</Text>
        <AiOutlineRight />
      </Flex>
    </Link>
  );
}
