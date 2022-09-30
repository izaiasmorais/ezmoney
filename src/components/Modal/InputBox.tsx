import { Box, FormLabel, Input } from "@chakra-ui/react";
import { useMoney } from "../../contexts/MoneyContext";

interface Props {
  id: string;
  type: string;
  name: string;
  value: string | number | readonly string[] | undefined;
}

export function InputBox({ id, type, name, value }: Props) {
  const { handleChangeValues } = useMoney();

  return (
    <Box>
      <FormLabel>{name}</FormLabel>
      <Input id={id} type={type} value={value} onChange={handleChangeValues} />
    </Box>
  );
}
