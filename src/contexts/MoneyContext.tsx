import { useTheme } from "next-themes";
import {
  useState,
  ReactNode,
  createContext,
  useContext,
  ChangeEvent,
} from "react";
import toast from "react-hot-toast";
import { FormDataProps, ThemeProps, TransactionProps } from "../@types/types";
import { api } from "../lib/axios";
import { darkColors, lightColors } from "../styles/colors";

interface MoneyContextProviderProps {
  children: ReactNode;
}

interface MoneyContextType {
  nextTheme: ThemeProps;
  bgNextColor: string;
  transactions: TransactionProps[];
  formData: FormDataProps;
  transactionType: string;
  shadow: string;
  setTransactions: (transactions: TransactionProps[]) => void;
  setTransactionType: (value: string) => void;
  createTransaction: () => void;
  handleChangeValues: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MoneyContext = createContext({} as MoneyContextType);

export function MoneyContextProvider({ children }: MoneyContextProviderProps) {
  const { theme } = useTheme();
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [transactionType, setTransactionType] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
  });

  const newTransaction = {
    title: formData.title,
    description: formData.description,
    price: Number(formData.price),
    type: transactionType,
  };

  function handleChangeValues(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  async function createTransaction() {
    try {
      await api.post(
        "/clients/a9744fad-ea57-4b72-a8fa-ba3950d402a1/transactions",
        newTransaction
      );

      const { data } = await api.get(
        "/clients/a9744fad-ea57-4b72-a8fa-ba3950d402a1/transactions"
      );

      setTransactions(data);
      setFormData({ title: "", description: "", price: 0 });

      toast.success("Transação adicionada com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao adicionar transação");
    }
  }

  let shadow = "";

  if (theme === "light") {
    shadow =
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";
  } else {
    shadow = "";
  }

  const bgNextColor = theme === "light" ? "#ffffff" : "#000000";

  const nextTheme = theme === "light" ? lightColors : darkColors;

  return (
    <MoneyContext.Provider
      value={{
        nextTheme,
        bgNextColor,
        shadow,
        transactions,
        setTransactions,
        createTransaction,
        handleChangeValues,
        setTransactionType,
        transactionType,
        formData,
      }}
    >
      {children}
    </MoneyContext.Provider>
  );
}

export function useMoney() {
  const money = useContext(MoneyContext);

  return money;
}
