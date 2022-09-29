import { Button, Text } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";
import { useMoney } from "../../contexts/MoneyContext";

interface Props {
  name: string;
  clickFunction?: () => void;
}

export function AddButton({ name, clickFunction }: Props) {
  const { shadow, nextTheme } = useMoney();

  return (
    <Button
      onClick={() => clickFunction}
      borderRadius="1rem"
      display="flex"
      py="1.5rem"
      gap={[".5rem", ".5rem", "1rem"]}
      alignItems="center"
      bg={nextTheme.back.boxes}
      justifyContent="space-between"
      boxShadow={shadow}
    >
      <Text fontSize={[".8rem", "1rem"]}>{name}</Text>
      <FaPlusCircle size={30} color="#7F3DFF" min={30} />
    </Button>
  );
}
