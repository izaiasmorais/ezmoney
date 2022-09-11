import { Box, Flex, Image, SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  name: string;
  value: string;
}

export function ResumeBox({ name, value }: Props) {
  return (
    <SimpleGrid
      bg="white.100"
      borderRadius="1rem"
      justifyContent="space-between"
      p="1.5rem"
      gap=".8rem"
      flex="1"
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
      gridTemplateColumns={[
        "3fr 1fr",
        "1fr",
        "3fr 1fr",
        "1fr",
        "1fr",
        "4fr 1fr",
      ]}
    >
      <Flex justify={["right", "left", "right", "left", "left", "right"]}>
        <Image src={`/assets/${name}.png`} alt="Entradas" w="48px" h="48px" />
      </Flex>
      <Box gridRow={["1", "normal", "1", "normal", "normal", "1"]}>
        <Text color="blackAlpha.700" mb="1rem">
          {name}
        </Text>
        <Text
          fontWeight="500"
          fontSize={["2rem", "2rem", "2.5rem", "2rem", "2.5rem", "2.75rem"]}
          mb={["0", "0", "0", "0", "0", "1rem"]}
        >
          R$ {value}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
