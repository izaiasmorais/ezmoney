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
import { InvoicesToggler } from "./InvoicesToggler";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export function InvoicesModal({ isOpen, onClose }: Props) {
  const { formData, nextTheme, clearData, createInvoice } = useMoney();

  function handleAddInvoice() {
    createInvoice();
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
        <ModalHeader>Adicionar Conta</ModalHeader>
        <ModalCloseButton />
        <ModalBody display="grid" gap={1}>
          <InputBox name="Nome" id="title" type="text" value={formData.title} />
          <InputBox
            name="Valor"
            id="price"
            type="number"
            value={formData.price}
          />
          <InputBox
            name="Vencimento"
            id="dueDate"
            type="date"
            value={formData.dueDate}
          />
          <Box>
            <FormLabel>Status</FormLabel>
            <InvoicesToggler />
          </Box>
        </ModalBody>

        <ModalFooter gap={2}>
          <Button onClick={handleCancel}>Cancelar</Button>
          <Button
            color="white.100"
            bg="purple.700"
            _hover={{ bg: "purple.500" }}
            onClick={handleAddInvoice}
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
