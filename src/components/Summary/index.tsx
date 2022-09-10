import { Button, Flex, SimpleGrid, Text, Image } from "@chakra-ui/react";
import { ResumeBox } from "./ResumeBox";
import { TotalBox } from "./TotalBox";

export function Summary() {
  return (
    <SimpleGrid
      gap="1.5rem"
      gridTemplateColumns={[
        "1fr",
        "1fr",
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
        <Button
          borderRadius="1rem"
          display="flex"
          py="1.5rem"
          bg="white.100"
          justifyContent="space-between"
        >
          <Text>New Transaction</Text>
          <Image src="/assets/Add.png" alt="Nova transação" w="30" h="30" />
        </Button>
      </Flex>
    </SimpleGrid>
  );
}
