import { Button, Text, Image } from "@chakra-ui/react";

export function NewTransactionButton() {
  return (
    <Button
      borderRadius="1rem"
      display="flex"
      py="1.5rem"
      bg="white.100"
      justifyContent="space-between"
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
    >
      <Text>New Transaction</Text>
      <Image src="/assets/Add.png" alt="Nova transação" w="30" h="30" />
    </Button>
  );
}
