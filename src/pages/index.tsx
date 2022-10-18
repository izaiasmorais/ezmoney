import { Flex } from "@chakra-ui/react";
import { Presentation } from "../components/Home/Presentation";
import { AuthBox } from "../components/Home/AuthBox";

export default function Home() {
  return (
    <Flex w="100%" h="100vh" color="white">
      <Presentation />
      <AuthBox />
    </Flex>
  );
}
