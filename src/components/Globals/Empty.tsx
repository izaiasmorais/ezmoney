import { Box, Flex, Text } from "@chakra-ui/react";
import { FaCarSide, FaShoppingCart } from "react-icons/fa";
import { useMoney } from "../../contexts/MoneyContext";
import { MoneyBox } from "./MoneyBox";

interface Props {
  title: string;
}

export function Empty({ title }: Props) {
  const { nextTheme } = useMoney();

  const shadow =
    "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";

  return (
    <Flex
      w="100%"
      direction="column"
      justify="center"
      align="center"
      mr="4rem"
      p="2rem"
    >
      <MoneyBox w="430px" gap=".7rem" boxShadow={shadow}>
        <Flex
          w="50px"
          h="50px"
          bg="red.100"
          borderRadius="1rem"
          align="center"
          justify="center"
        >
          <FaCarSide color="#FF4842" size={25} />
        </Flex>

        <Box display="grid" w="340px">
          <Box
            w="100%"
            h="15px"
            bg={nextTheme.back.card}
            borderRadius=".5rem"
          />
          <Box w="60%" h="15px" bg={nextTheme.back.card} borderRadius=".5rem" />
        </Box>
      </MoneyBox>

      <MoneyBox w="430px" gap=".7rem" mt="-1rem" ml="4rem" boxShadow={shadow}>
        <Flex
          w="50px"
          h="50px"
          bg="purple.100"
          borderRadius="1rem"
          align="center"
          justify="center"
        >
          <FaShoppingCart color="#7F3DFF" size={25} />
        </Flex>

        <Box display="grid" w="340px">
          <Box
            w="100%"
            h="15px"
            bg={nextTheme.back.card}
            borderRadius=".5rem"
          />
          <Box w="60%" h="15px" bg={nextTheme.back.card} borderRadius=".5rem" />
        </Box>
      </MoneyBox>

      <Text
        mt="2rem"
        ml="2rem"
        fontWeight={600}
        fontSize="1.25rem"
        color={nextTheme.text.paragraphy}
      >
        {title}
      </Text>
    </Flex>
  );
}
