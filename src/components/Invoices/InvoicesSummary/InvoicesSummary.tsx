import { Flex } from "@chakra-ui/react";
import {
  FaBell,
  FaCheckCircle,
  FaClipboard,
  FaClipboardList,
  FaClock,
} from "react-icons/fa";
import { useMoney } from "../../../contexts/MoneyContext";
import { InvoiceBox } from "./InvoiceBox";

export function InvoicesSummary() {
  const { nextTheme, shadow } = useMoney();

  return (
    <Flex
      overflowX="auto"
      borderRadius="1rem"
      bg={nextTheme.back.boxes}
      boxShadow={shadow}
      css={{
        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Flex gap="1rem" py="1rem" w="100%" h="114px" minW="1000px">
        <InvoiceBox
          icon={<FaClipboardList size={20} color="#0077FF" />}
          color="blue.700"
          invoices={20}
          name="Total"
          price={2105}
        />
        <InvoiceBox
          icon={<FaCheckCircle size={20} color="#00A86B" />}
          color="green.700"
          invoices={6}
          name="Pago"
          price={560}
        />
        <InvoiceBox
          icon={<FaClock size={20} color="#FCAC12" />}
          color="yellow.700"
          invoices={4}
          name="Não pago"
          price={305}
        />
        <InvoiceBox
          icon={<FaBell size={20} color="#FD3C4A" />}
          color="red.700"
          invoices={6}
          name="Atrasado"
          price={340}
        />
        <InvoiceBox
          icon={<FaClipboard size={20} color="#7F3DFF" />}
          color="purple.700"
          invoices={4}
          name="Adiado"
          price={695}
        />
      </Flex>
    </Flex>
  );
}
