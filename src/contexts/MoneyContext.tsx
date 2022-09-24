import {
  useState,
  ReactNode,
  createContext,
  useContext,
  ChangeEvent,
} from "react";
import toast from "react-hot-toast";
import { FormDataProps, TransactionProps } from "../@types/types";
import { api } from "../lib/axios";

interface MoneyContextProviderProps {
  children: ReactNode;
}

interface MoneyContextType {
  transactions: TransactionProps[];
  formData: FormDataProps;
  transactionType: string;
  setTransactions: (transactions: TransactionProps[]) => void;
  setTransactionType: (value: string) => void;
  createTransaction: () => void;
  handleChangeValues: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const MoneyContext = createContext({} as MoneyContextType);

export function MoneyContextProvider({ children }: MoneyContextProviderProps) {
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

  return (
    <MoneyContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionType,
        setTransactionType,
        createTransaction,
        handleChangeValues,
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
