import { useTheme } from "next-themes";
import {
  useState,
  ReactNode,
  createContext,
  useContext,
  ChangeEvent,
  useEffect,
} from "react";
import toast from "react-hot-toast";
import {
  FormDataProps,
  InvoicesProps,
  ThemeProps,
  TransactionProps,
} from "../@types/types";
import { api } from "../lib/axios";
import { darkColors, lightColors } from "../styles/colors";

interface MoneyContextProviderProps {
  children: ReactNode;
}

interface MoneyContextType {
  invoices: InvoicesProps[];
  nextTheme: ThemeProps;
  transactions: TransactionProps[];
  formData: FormDataProps;
  transactionType: string;
  shadow: string;
  invoiceType: string;
  clearData: () => void;
  setInvoices: (invoices: InvoicesProps[]) => void;
  setInvoiceType: (value: string) => void;
  setTransactions: (transactions: TransactionProps[]) => void;
  setTransactionType: (value: string) => void;
  createTransaction: () => void;
  handleChangeValues: (event: ChangeEvent<HTMLInputElement>) => void;
  createInvoice: () => void;
}

export const MoneyContext = createContext({} as MoneyContextType);

export function MoneyContextProvider({ children }: MoneyContextProviderProps) {
  const { systemTheme, resolvedTheme } = useTheme();
  const [transactions, setTransactions] = useState<TransactionProps[]>([]);
  const [transactionType, setTransactionType] = useState("");
  const [invoices, setInvoices] = useState<InvoicesProps[]>([]);
  const [invoiceType, setInvoiceType] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: 0,
    dueDate: "",
  });
  const userId = process.env.NEXT_PUBLIC_USER_ID;

  const newTransaction = {
    title: formData.title,
    description: formData.description,
    price: Number(formData.price),
    type: transactionType,
  };

  const newInvoice = {
    title: formData.title,
    price: Number(formData.price),
    dueDate: formData.dueDate,
    status: invoiceType,
  };

  function clearData() {
    setFormData({ title: "", description: "", price: 0, dueDate: "" });
  }

  function handleChangeValues(event: ChangeEvent<HTMLInputElement>) {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  }

  async function createTransaction() {
    try {
      await api.post(`/clients/${userId}/transactions`, newTransaction);

      const { data } = await api.get(`/clients/${userId}/transactions`);

      setTransactions(data);
      clearData();

      toast.success("Transação adicionada com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao adicionar transação!");
    }
  }

  async function createInvoice() {
    try {
      await api.post(`/clients/${userId}/invoices`, newInvoice);

      const { data } = await api.get(`/clients/${userId}/invoices`);

      setInvoices(data);
      clearData();

      toast.success("Conta adicionada com sucesso!");
    } catch (error) {
      console.log(error);

      toast.error("Erro ao adicionar conta!");
    }
  }

  useEffect(() => {
    if (systemTheme === "light") {
      nextTheme = lightColors;
      shadow =
        "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";
    } else {
      nextTheme = darkColors;
      shadow = "";
    }
  }, []);

  let nextTheme = lightColors;
  let shadow = "";

  if (resolvedTheme === "light") {
    nextTheme = lightColors;
    shadow =
      "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px";
  } else {
    nextTheme = darkColors;
    shadow = "";
  }

  return (
    <MoneyContext.Provider
      value={{
        nextTheme,
        clearData,
        shadow,
        transactions,
        formData,
        invoices,
        invoiceType,
        transactionType,
        setInvoices,
        setInvoiceType,
        setTransactions,
        setTransactionType,
        createTransaction,
        handleChangeValues,
        createInvoice,
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
