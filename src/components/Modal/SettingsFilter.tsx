import { Flex, Text } from "@chakra-ui/react";
import { FaKey, FaQuestionCircle, FaUserCircle } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

interface Props {
  config: string;
  setConfig: (config: string) => void;
}

export function SettingsFilter({ config, setConfig }: Props) {
  const data = [
    {
      name: "Dados Gerais",
      icon: <FaUserCircle />,
    },
    {
      name: "Alterar Senha",
      icon: <FaKey />,
    },
    {
      name: "Idioma",
      icon: <TbWorld size={20} />,
    },
    {
      name: "Suporte",
      icon: <FaQuestionCircle />,
    },
  ];

  return (
    <Flex fontWeight={600} w="550px">
      {data.map((item, index) => (
        <Flex
          key={index}
          align="center"
          gap=".5rem"
          p="1rem"
          minW="max-content"
          cursor="pointer"
          onClick={() => [setConfig(item.name), console.log(config, name)]}
          transition="color .2s forwards"
          color={item.name === config ? "#7F3DFF" : "inherit"}
          borderBottom={
            item.name === config
              ? ".2rem solid #7F3DFF"
              : ".2rem solid transparent"
          }
        >
          {item.icon}
          <Text>{item.name}</Text>
        </Flex>
      ))}
    </Flex>
  );
}
