import { Flex, SimpleGrid } from "@chakra-ui/react";
import {
  FaArrowCircleDown,
  FaArrowCircleUp,
  FaExchangeAlt,
} from "react-icons/fa";
import { AddButton } from "./AddButton";
import { ResumeBox } from "./ResumeBox";
import { TotalBox } from "./TotalBox";

export function Summary() {
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
        value="2500"
        icon={<FaArrowCircleDown size={25} color="#0CDF92" />}
      />
      <ResumeBox
        name="Saídas"
        value="1200"
        icon={<FaArrowCircleUp size={25} color="#FD3C4A" />}
      />
      <ResumeBox
        name="Transferências"
        value="800"
        icon={<FaExchangeAlt size={20} color="#45B1FF" />}
      />
      <Flex gap="1rem" direction="column">
        <TotalBox />
        <AddButton name="Adicionar transação" />
      </Flex>
    </SimpleGrid>
  );
}
