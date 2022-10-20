import { Flex, Select, Text } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { TransactionProps } from "../../@types/types";
import { useMoney } from "../../contexts/MoneyContext";
import { GButton } from "../Globals/GButton";
import { AddButton } from "../Globals/GButton/AddButton";

interface Props {
  data: TransactionProps[];
  onOpen: () => void;
}

export function TransactionHeading({ data, onOpen }: Props) {
  const { setTransactions } = useMoney();

  function handleFilter(type: string) {
    if (type === "") {
      setTransactions(data);
    } else if (type === "Entrada") {
      const filtered = data.filter((item) => item.type === "Entrada");
      setTransactions(filtered);
    } else if (type === "Saída") {
      const filtered = data.filter((item) => item.type !== "Entrada");
      setTransactions(filtered);
    } else {
      const filtered = data.filter((item) => item.type === type);
      setTransactions(filtered);
    }
  }

  return (
    <Flex
      w="100%"
      mt="1rem"
      mb="2rem"
      gap={["1rem", "1.5rem"]}
      align="center"
      justify="space-between"
    >
      <Select
        placeholder="Todos"
        maxWidth={160}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="Entrada">Entradas</option>
        <option value="Saída">Saídas</option>
        <option value="Compra">Compras</option>
        <option value="Conta">Contas</option>
        <option value="Transporte">Transporte</option>
        <option value="Comida">Comida</option>
      </Select>

      <Flex onClick={onOpen}>
        <AddButton text="Adicionar transação" />
      </Flex>
    </Flex>
  );
}
