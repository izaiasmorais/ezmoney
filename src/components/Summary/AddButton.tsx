import { Button, Text } from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";

interface Props {
  func?: () => void;
  name: string;
}

export function AddButton({ func, name }: Props) {
  return (
    <Button
      borderRadius="1rem"
      display="flex"
      py="1.5rem"
      gap="1.5rem"
      alignItems="center"
      bg="white.100"
      minW={200}
      onClick={func}
      justifyContent="space-between"
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
    >
      <Text>{name}</Text>
      <FaPlusCircle size={30} color="#7F3DFF" />
    </Button>
  );
}
