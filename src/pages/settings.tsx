import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Layout } from "../components/Globals/Layout";
import { GBox } from "../components/Globals/GBox";
import { SettingsFilter } from "../components/Modal/SettingsFilter";
import { ChangeLanguague } from "../components/Settings/ChangeLanguague";
import { ChangePassword } from "../components/Settings/ChangePassword";
import { GeneralData } from "../components/Settings/GeneralData";
import { SettingsSuport } from "../components/Settings/SettingsSuport";
import { useMoney } from "../contexts/MoneyContext";

export default function Settings() {
  const { nextTheme } = useMoney();
  const [config, setConfig] = useState("Dados Gerais");

  return (
    <Layout title="Configurações" maxw={1200}>
      <GBox p="0" overflowY="auto" direction="column">
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
          <SettingsSuport />
        )}
      </GBox>
    </Layout>
  );
}
