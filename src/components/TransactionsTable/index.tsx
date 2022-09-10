import { Flex } from "@chakra-ui/react";
import { Transaction } from "./Transaction";
import { IoFastFoodSharp } from "react-icons/io5";
import {
  FaFileInvoiceDollar,
  FaShoppingCart,
  FaMoneyBillWave,
  FaCarSide,
} from "react-icons/fa";

export function TransactionsTable() {
  return (
    <Flex
      direction="column"
      bg="white.100"
      h="max-content"
      gridColumn="1 / 4"
      borderRadius="1rem"
      p="1rem"
      gap="1rem"
      mr="2rem"
      boxShadow="rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px"
    >
      <Transaction
        type="expanse"
        title="Food"
        description="Buy some ramen"
        color="red.700"
        bg="red.100"
        hour="10:00 am"
        icon={<IoFastFoodSharp color="#FD3C4A" size={30} />}
        price={1000}
      />

      <Transaction
        type="expanse"
        title="Transporte"
        description="Uber + Bus"
        color="red.700"
        bg="blue.100"
        hour="10:00 am"
        icon={<FaCarSide color="#0077FF" size={30} />}
        price={750}
      />

      <Transaction
        type="income"
        title="Salary"
        description="Kindella payment"
        color="green.700"
        bg="green.100"
        hour="10:00 am"
        icon={<FaMoneyBillWave color="#00A86B" size={30} />}
        price={2750}
      />

      <Transaction
        type="expanse"
        title="Shopping"
        description="Bought many clothes"
        color="red.700"
        bg="yellow.100"
        hour="10:00 am"
        icon={<FaShoppingCart color="#FCAC12" size={30} />}
        price={900}
      />

      <Transaction
        type="expanse"
        title="Invoices"
        description="All fatures of this month"
        color="red.700"
        bg="purple.100"
        hour="10:00 am"
        icon={<FaFileInvoiceDollar color="#7F3DFF" size={30} />}
        price={3000}
      />
    </Flex>
  );
}
