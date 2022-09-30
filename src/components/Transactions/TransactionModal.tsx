import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Button,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Box,
  FormLabel,
} from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";
import { InputBox } from "../Modal/InputBox";
import { TransactionToggler } from "./TransactionToggler";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function TransactionModal({ isOpen, onClose }: ModalProps) {
  const { createTransaction, formData, nextTheme, clearData } = useMoney();

  function handleAddTransaction() {
    createTransaction();
    onClose();
  }

  function handleCancel() {
    clearData();
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={["sm", "md"]}>
      <ModalOverlay />
      <ModalContent mt="200px" borderRadius="1rem" bg={nextTheme.back.boxes}>
        <ModalHeader>Adicionar transação</ModalHeader>

        <ModalCloseButton />

        <ModalBody display="grid" gap={1}>
          <InputBox name="Nome" id="title" type="text" value={formData.title} />
          <InputBox
            name="Descrição"
            id="description"
            type="text"
            value={formData.description}
          />
          <InputBox
            name="Valor"
            id="price"
            type="number"
            value={formData.price}
          />
          <Box>
            <FormLabel>Tipo</FormLabel>
            <TransactionToggler />
          </Box>
        </ModalBody>

        <ModalFooter gap={2}>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button
            color="white.100"
            bg="purple.700"
            _hover={{ bg: "purple.500" }}
            onClick={handleAddTransaction}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
