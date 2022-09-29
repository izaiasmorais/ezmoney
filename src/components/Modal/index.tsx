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
import { useMoney } from "../../contexts/MoneyContext";
import { Toggler } from "./Toggler";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MoneyModal({ isOpen, onClose }: ModalProps) {
  const { createTransaction, formData, handleChangeValues, nextTheme } =
    useMoney();

  function handleCreateTransaction() {
    createTransaction();
    onClose();
  }

  return (
    <Modal onClose={onClose} size={["sm", "md"]} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent mt="200px" borderRadius="1rem" bg={nextTheme.back.boxes}>
        <ModalHeader>Adicionar transação</ModalHeader>

        <ModalCloseButton />

        <ModalBody display="grid" gap={1}>
          <Box>
            <FormLabel>Nome</FormLabel>
            <Input
              id="title"
              type="text"
              value={formData.title}
              onChange={handleChangeValues}
            />
          </Box>
          <Box>
            <FormLabel>Descrição</FormLabel>
            <Input
              id="description"
              type="text"
              value={formData.description}
              onChange={handleChangeValues}
            />
          </Box>
          <Box>
            <FormLabel>Valor</FormLabel>
            <Input
              id="price"
              type="number"
              value={formData.price}
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
