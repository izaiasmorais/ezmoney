import { IoFastFoodSharp } from "react-icons/io5";
import {
  FaFileInvoiceDollar,
  FaShoppingCart,
  FaMoneyBillWave,
  FaCarSide,
} from "react-icons/fa";

const foodData = {
  icon: <IoFastFoodSharp color="#FF9B00" size={30} />,
  bgColor: "yellow.100",
};

const transportData = {
  icon: <FaCarSide color="#FF4842" size={30} />,
  bgColor: "red.100",
};

const invoicesData = {
  icon: <FaFileInvoiceDollar color="#2D99FF" size={30} />,
  bgColor: "blue.100",
};

const shoppingData = {
  icon: <FaShoppingCart color="#7F3DFF" size={30} />,
  bgColor: "purple.100",
};

const salaryData = {
  icon: <FaMoneyBillWave color="#00A86B" size={30} />,
  bgColor: "green.100",
};

export function icon(type: string) {
  if (type === "Comida") {
    return foodData;
  } else if (type === "Transporte") {
    return transportData;
  } else if (type === "Compras") {
    return shoppingData;
  } else if (type === "Contas") {
    return invoicesData;
  } else {
    return salaryData;
  }
}


