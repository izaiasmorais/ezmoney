import { Flex, SimpleGrid } from "@chakra-ui/react";
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
      <ResumeBox name="Income" value="2500" />
      <ResumeBox name="Expanses" value="1200" />
      <ResumeBox name="Transfers" value="800" />
      <Flex gap="1rem" direction="column">
        <TotalBox />
        <AddButton name="Adicionar transação" />
      </Flex>
    </SimpleGrid>
  );
}
