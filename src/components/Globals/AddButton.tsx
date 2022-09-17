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
      gap={[".5rem", ".5rem", "1rem"]}
      alignItems="center"
      bg="back.boxes"
      onClick={func}
      justifyContent="space-between"
      boxShadow={shadow}
    >
      <Text fontSize={[".8rem", "1rem"]}>{name}</Text>
      <FaPlusCircle size={30} color="#7F3DFF" min={30} />
    </Button>
  );
}
