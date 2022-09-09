import { Text, Image, Flex } from "@chakra-ui/react";

import Link from "next/link";

interface NavItemProps {
  name: string;
  src: string;
  active?: boolean;
}

export function NavItem({ name, src, active = false }: NavItemProps) {
  return (
    <Link href={src} key={name}>
      <Flex
        gap="1rem"
        p=".5rem"
        w="100%"
        borderRadius=".3rem"
        _hover={{ bg: "dark.300" }}
        bg={active ? "purple.700 !important" : "normal"}
      >
        <Image
          src={`/assets/Icon${name}.png`}
          alt="Carteira"
          w="20px"
          h="20px"
        />
        <Text>{name}</Text>
      </Flex>
    </Link>
  );
}
