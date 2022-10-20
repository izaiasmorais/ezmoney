import { Flex } from "@chakra-ui/react";
import { Presentation } from "../components/Home/Presentation";
import { AuthBox } from "../components/Home/AuthBox";
import { useEffect, useState } from "react";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <Flex minH="162.38px" />;

  return (
    <Flex w="100%" h="100vh">
      <Presentation />
      <AuthBox />
    </Flex>
  );
}
