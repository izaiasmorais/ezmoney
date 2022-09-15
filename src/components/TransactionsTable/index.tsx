import { Flex } from "@chakra-ui/react";
import { Transaction } from "./Transaction";
import { IoFastFoodSharp } from "react-icons/io5";
import {
  FaFileInvoiceDollar,
  FaShoppingCart,
  FaMoneyBillWave,
  FaCarSide,
} from "react-icons/fa";
import { useShadow } from "../../contexts/ShadowContext";

export function TransactionsTable() {
  const { shadow } = useShadow();
  return (
    <Flex
      w="100%"
      direction="column"
      bg="back.boxes"
      h="max-content"
      borderRadius="1rem"
      p="1rem"
      gap="1rem"
      gridColumn={["1", "1", "1", "1 / 4"]}
      boxShadow={shadow}
    >
      <Transaction
        type="expanse"
        title="Comida"
        description="Compras no supermercado"
        color="red.700"
        bg="red.100"
        hour="08/09/2022"
        icon={<IoFastFoodSharp color="#FD3C4A" size={30} />}
        price={1000}
      />

      <Transaction
        type="expanse"
        title="Transporte"
        description="Uber + Ônibus"
        color="red.700"
        bg="blue.100"
        hour="04/09/2022"
        icon={<FaCarSide color="#0077FF" size={30} />}
        price={750}
      />

      <Transaction
        type="income"
        title="Salário"
        description="Pagamento da empresa"
        color="green.700"
        bg="green.100"
        hour="01/09/2022"
        icon={<FaMoneyBillWave color="#00A86B" size={30} />}
        price={2750}
      />

      <Transaction
        type="expanse"
        title="Compras"
        description="Roupas e Calçados"
        color="red.700"
        bg="yellow.100"
        hour="27/08/2022"
        icon={<FaShoppingCart color="#FCAC12" size={30} />}
        price={900}
      />

      <Transaction
        type="expanse"
        title="Contas"
        description="Todas as faturas do mês"
        color="red.700"
        bg="purple.100"
        hour="01/07/2022"
        icon={<FaFileInvoiceDollar color="#7F3DFF" size={30} />}
        price={3000}
      />
    </Flex>
  );
}
