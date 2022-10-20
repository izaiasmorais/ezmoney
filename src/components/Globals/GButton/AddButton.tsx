import { FaPlusCircle } from "react-icons/fa";
import { GButton } from "./index";
import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

export function AddButton({ text }: Props) {
  return (
    <GButton>
      <Text fontSize={[".8rem", "1rem"]}>{text}</Text>
      <FaPlusCircle size={25} min={25} color="#7F3DFF" />
    </GButton>
  );
}
