import { Box } from "@chakra-ui/react";
import { useMoney } from "../../../contexts/MoneyContext";

interface Props {
  page: number;
  onClick: () => void;
}

export function PaginationItem({ page, onClick }: Props) {
  const { nextTheme } = useMoney();

  return (
    <Box
      h={30}
      w={30}
      display="flex"
      alignItems="center"
      justifyContent="center"
      transition=".2s"
      borderRadius=".3rem"
      cursor="pointer"
      fontWeight={600}
      onClick={onClick}
      bg={nextTheme.back.card}
      color={nextTheme.text.paragraphy}
      _hover={{ background: "purple.700", color: "white" }}
    >
      {page}
    </Box>
  );
}
