import { Flex, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useMoney } from "../../contexts/MoneyContext";

interface Props {
  name: string;
  value: number;
  icon: ReactNode;
}

export function ResumeBox({ name, value, icon }: Props) {
  const { shadow, nextTheme } = useMoney();

  return (
    <Flex
      boxShadow={shadow}
      bg={nextTheme.back.boxes}
      borderRadius="1rem"
      justifyContent="space-between"
      direction="column"
      p="1.5rem"
    >
      <Flex justify="space-between">
        <Text color={nextTheme.text.paragraphy} fontWeight="600">
          {name}
        </Text>

        <Flex
          bg={nextTheme.back.body}
          w="50px"
          h="50px"
          align="center"
          justify="center"
          borderRadius="1rem"
        >
          {icon}
        </Flex>
      </Flex>

      <Text fontWeight="500" fontSize={["1.25rem", "1.25rem", "2rem"]}>
        R$ {value}
      </Text>
    </Flex>
  );
}
