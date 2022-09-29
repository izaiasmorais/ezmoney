import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useMoney } from "../../contexts/MoneyContext";

interface Props {
  name: string;
  value: string;
  icon: ReactNode;
}

export function ResumeBox({ name, value, icon }: Props) {
  const { shadow, nextTheme } = useMoney();

  return (
    <SimpleGrid
      boxShadow={shadow}
      bg={nextTheme.back.boxes}
      borderRadius="1rem"
      justifyContent="space-between"
      p="1.5rem"
      gap=".8rem"
      flex="1"
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
        <Flex
          bg={nextTheme.back.card}
          w="50px"
          h="50px"
          align="center"
          justify="center"
          borderRadius="1rem"
        >
          {icon}
        </Flex>
      </Flex>
      <Box gridRow={["1", "normal", "1", "normal", "normal", "1"]}>
        <Text color={nextTheme.text.paragraphy} mb="1rem">
          {name}
        </Text>
        <Text
          fontWeight="500"
          fontSize={["2rem", "2rem", "2.5rem", "1.5rem", "2.5rem", "2.75rem"]}
          mb={["0", "0", "0", "0", "0", "1rem"]}
        >
          R$ {value}
        </Text>
      </Box>
    </SimpleGrid>
  );
}
