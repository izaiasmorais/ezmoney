import { Text, Image, Flex } from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
  name: string;
  src: string;
  active?: boolean;
}

export function NavItem({ name, src, active = false }: NavItemProps) {
  const { asPath } = useRouter();

  const activeLink = asPath.endsWith(src) ? active : false;

  return (
    <Link href={src} key={name}>
      <Flex
        gap="1rem"
        p=".5rem"
        w="100%"
        cursor="pointer"
        borderRadius=".5rem"
        transition="color .3s"
        _hover={{ bg: "dark.300" }}
        bg={activeLink ? "purple.700 !important" : "normal"}
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
