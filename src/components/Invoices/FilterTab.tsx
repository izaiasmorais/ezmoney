import { Flex } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";
import { FilterBox } from "./FilterBox";

export function FilterTab() {
  const { nextTheme } = useMoney();

  return (
    <Flex
      p=".5rem"
      overflowX="auto"
      bg={nextTheme.back.card}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Flex bg="back.card" h="3rem" px="1rem" py=".7rem" minW="750px">
        <FilterBox bg="blue.100" color="blue.700" name="Todos" quantity={20} />
        <FilterBox name="Pagos" bg="green.100" color="green.700" quantity={4} />
        <FilterBox
          name="Não pagos"
          bg="yellow.100"
          color="yellow.700"
          quantity={6}
        />
        <FilterBox name="Atrasados" bg="red.100" color="red.700" quantity={4} />
        <FilterBox
          name="Rascunho"
          bg="purple.100"
          color="purple.700"
          quantity={6}
        />
      </Flex>
    </Flex>
  );
}
