import { Button, Text } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { useShadow } from "../../contexts/ShadowContext";

interface Props {
  func?: () => void;
  name: string;
}

export function AddButton({ func, name }: Props) {
  const { shadow } = useShadow();

  return (
    <Button
      borderRadius="1rem"
      display="flex"
      py="1.5rem"
      gap="1.5rem"
      alignItems="center"
      bg="back.boxes"
      minW={240}
      onClick={func}
      justifyContent="space-between"
      boxShadow={shadow}
    >
      <Text>{name}</Text>
      <FaPlusCircle size={30} color="#7F3DFF" min={30} />
    </Button>
  );
}
