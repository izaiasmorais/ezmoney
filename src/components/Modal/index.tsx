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
import { Toggler } from "./Toggler";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MoneyModal({ isOpen, onClose }: ModalProps) {
  return (
    <Modal onClose={onClose} size={["sm", "md"]} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent mt="200px" borderRadius="1rem">
        <ModalHeader>Adicionar transação</ModalHeader>

        <ModalCloseButton />

        <ModalBody display="grid" gap={1}>
          <Box>
            <FormLabel>Nome</FormLabel>
            <Input id="title" type="text" />
          </Box>
          <Box>
            <FormLabel>Descrição</FormLabel>
            <Input id="description" type="text" />
          </Box>
          <Box>
            <FormLabel>Valor</FormLabel>
            <Input id="value" type="number" />
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
          >
            Confirmar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
