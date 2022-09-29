import { ReactNode } from "react";
import { Text, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMoney } from "../../contexts/MoneyContext";

interface NavItemProps {
  name: string;
  src: string;
  active?: boolean;
  icon: ReactNode;
}

export function NavItem({ name, src, active = false, icon }: NavItemProps) {
  const { nextTheme } = useMoney();
  const { asPath } = useRouter();

  const activeLink = asPath.endsWith(src) ? active : false;

  return (
    <Link href={src} key={name}>
      <Flex
        gap="1rem"
        py=".5rem"
        px="1rem"
        w="100%"
        cursor="pointer"
        borderRadius=".5rem"
        transition="color .3s"
        _hover={{ bg: "#464A4D" }}
        bg={activeLink ? "purple.700 !important" : "normal"}
        color={activeLink ? "white.100" : nextTheme.text.sidebar}
      >
        {icon}
        <Text fontWeight={500}>{name}</Text>
      </Flex>
    </Link>
  );
}
