import { Button, Flex, Link } from "@chakra-ui/react";
import {
  AiFillInstagram,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";

export function SettingsSuport() {
  return (
    <Flex direction="column" p="2rem" gap="1rem">
      <Button maxW="336px">
        <Link
          href="https://github.com/izaiasmorais"
          display="flex"
          alignItems="center"
          gap=".5rem"
          textDecoration="none !important"
        >
          <AiOutlineGithub size={25} /> Ver repositório no Github
        </Link>
      </Button>

      <Button maxW="336px" gap=".5rem">
        <Link
          href="https://wa.me/5586995360996"
          display="flex"
          alignItems="center"
          gap=".5rem"
          textDecoration="none !important"
        >
          <AiOutlineWhatsApp size={25} /> Fale comigo pelo Whatsapp
        </Link>
      </Button>
      <Button maxW="336px" gap=".5rem">
        <Link
          href="https://instagram.com/izaias_morais_"
          display="flex"
          alignItems="center"
          gap=".5rem"
          textDecoration="none !important"
        >
          <AiFillInstagram size={25} />
          Fale comigo pelo Instagram
        </Link>
      </Button>
    </Flex>
  );
}
