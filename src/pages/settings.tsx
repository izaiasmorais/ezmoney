import {
  Box,
  Button,
  Flex,
  FormLabel,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../components/Globals/Layout";
import { MoneyBox } from "../components/Globals/MoneyBox";
import { SettingsFilter } from "../components/Modal/SettingsFilter";
import { GeneralData } from "../components/Settings/GeneralData";
import { useMoney } from "../contexts/MoneyContext";

export default function Settings() {
  const { nextTheme } = useMoney();
  const [config, setConfig] = useState("Dados Gerais");

  return (
    <Layout title="Configurações" maxw={1200}>
      <MoneyBox p="0" overflowY="auto" direction="column">
        <Flex overflowX="auto" bg={nextTheme.back.card}>
          <SettingsFilter config={config} setConfig={setConfig} />
        </Flex>

        {config === "Dados Gerais" ? (
          <GeneralData />
        ) : (
          <Flex p="2rem" direction="column" maxW="400px" gap="1rem">
            <Input placeholder="Senha Anterior" />
            <Input placeholder="Nova Anterior" />
            <Input placeholder="Confirmar Nova Anterior" />
            <Button
              color="white.100"
              bg="purple.700"
              display="block"
              _hover={{ bg: "purple.500" }}
            >
              Salvar Mudanças
            </Button>
          </Flex>
        )}
      </MoneyBox>
    </Layout>
  );
}
