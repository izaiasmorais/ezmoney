import { Box, Flex, Text } from "@chakra-ui/react";
import { FaCarSide, FaShoppingCart } from "react-icons/fa";
import { useMoney } from "../../../contexts/MoneyContext";
import { GBox } from "../GBox";

interface Props {
  title: string;
}

export function GEmpty({ title }: Props) {
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
      <GBox maxW="430px" w="100%" gap=".7rem" boxShadow={shadow}>
        <Flex
          w="50px !important"
          h="50px !important"
          bg="red.100"
          borderRadius="1rem"
          align="center"
          justify="center"
        >
          <FaCarSide color="#FF4842" size={25} />
        </Flex>

        <Box display="grid" maxW="340px" w="100%">
          <Box
            w="100%"
            h="15px"
            bg={nextTheme.back.card}
            borderRadius=".5rem"
          />
          <Box w="60%" h="15px" bg={nextTheme.back.card} borderRadius=".5rem" />
        </Box>
      </GBox>

      <GBox
        maxW="430px"
        w="100%"
        gap=".7rem"
        mt="-1rem"
        ml="4rem"
        boxShadow={shadow}
      >
        <Flex
          w="50px !important"
          h="50px !important"
          bg="purple.100"
          borderRadius="1rem"
          align="center"
          justify="center"
        >
          <FaShoppingCart color="#7F3DFF" size={25} />
        </Flex>

        <Box display="grid" maxW="340px" w="100%">
          <Box
            w="100%"
            h="15px"
            bg={nextTheme.back.card}
            borderRadius=".5rem"
          />
          <Box w="60%" h="15px" bg={nextTheme.back.card} borderRadius=".5rem" />
        </Box>
      </GBox>

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
