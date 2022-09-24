import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Input,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";
import { useMoney } from "../../contexts/MoneyContext";
import { api } from "../../lib/axios";
import { Toggler } from "./Toggler";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MoneyModal({ isOpen, onClose }: ModalProps) {
  const { setTransactions, transactionType } = useMoney();
  const [newTransaction, setNewTransaction] = useState({
    title: "",
    description: "",
    price: 0,
  });

  function handleChangeValues(event: ChangeEvent<HTMLInputElement>) {
    setNewTransaction({
      ...newTransaction,
      [event.target.id]: event.target.value,
    });
  }

  async function handleCreateTransaction() {
    try {
      await api.post(
        "/clients/a9744fad-ea57-4b72-a8fa-ba3950d402a1/transactions",
        {
          title: newTransaction.title,
          description: newTransaction.description,
          price: Number(newTransaction.price),
          type: transactionType,
        }
      );

      const { data } = await api.get(
        "/clients/a9744fad-ea57-4b72-a8fa-ba3950d402a1/transactions"
      );

      setTransactions(data);

      onClose();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Modal onClose={onClose} size={["sm", "md"]} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent mt="200px" borderRadius="1rem">
        <ModalHeader>Adicionar transação</ModalHeader>

        <ModalCloseButton />

        <ModalBody display="grid" gap={1}>
          <Box>
            <FormLabel>Nome</FormLabel>
            <Input
              id="title"
              type="text"
              value={newTransaction.title}
              onChange={handleChangeValues}
            />
          </Box>
          <Box>
            <FormLabel>Descrição</FormLabel>
            <Input
              id="description"
              type="text"
              value={newTransaction.description}
              onChange={handleChangeValues}
            />
          </Box>
          <Box>
            <FormLabel>Valor</FormLabel>
            <Input
              id="price"
              type="number"
              value={newTransaction.price}
              onChange={handleChangeValues}
            />
          </Box>
          <Box>
            <FormLabel>Tipo</FormLabel>
            <Toggler />
          </Box>
        </ModalBody>

        <ModalFooter gap={2}>
          <Button onClick={onClose}>Cancelar</Button>
          <Button
            color="white.100"
            bg="purple.700"
            _hover={{ bg: "purple.500" }}
            onClick={handleCreateTransaction}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
