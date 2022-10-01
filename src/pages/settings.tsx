import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../components/Globals/Layout";
import { MoneyBox } from "../components/Globals/MoneyBox";
import { SettingsFilter } from "../components/Modal/SettingsFilter";
import { ChangeLanguague } from "../components/Settings/ChangeLanguague";
import { ChangePassword } from "../components/Settings/ChangePassword";
import { GeneralData } from "../components/Settings/GeneralData";
import { useMoney } from "../contexts/MoneyContext";

export default function Settings() {
  const { nextTheme } = useMoney();
  const [config, setConfig] = useState("Dados Gerais");

  return (
    <Layout title="Configurações" maxw={1200}>
      <MoneyBox p="0" overflowY="auto" direction="column">
        <Flex
          overflowX="auto"
          bg={nextTheme.back.card}
          css={{
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <SettingsFilter config={config} setConfig={setConfig} />
        </Flex>

        {config === "Dados Gerais" ? (
          <GeneralData />
        ) : config === "Alterar Senha" ? (
          <ChangePassword />
        ) : config === "Idioma" ? (
          <ChangeLanguague />
        ) : (
          <Flex></Flex>
        )}
      </MoneyBox>
    </Layout>
  );
}
