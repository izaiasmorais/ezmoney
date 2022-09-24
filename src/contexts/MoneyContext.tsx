import { useState, ReactNode, createContext, useContext } from "react";
import { TransactionProps } from "../@types/types";

interface MoneyContextProviderProps {
  children: ReactNode;
}

interface MoneyContextType {
  user: string;
  transactions: TransactionProps[];
  setTransactions: (transactions: TransactionProps[]) => void;
  transactionType: string;
  setTransactionType: (value: string) => void;
}

export const MoneyContext = createContext({} as MoneyContextType);

export function MoneyContextProvider({ children }: MoneyContextProviderProps) {
  const [user, setUser] = useState("");

  const [transactions, setTransactions] = useState<TransactionProps[]>([]);

  const [transactionType, setTransactionType] = useState("");

  return (
    <MoneyContext.Provider
      value={{
        transactions,
        setTransactions,
        transactionType,
        user,
        setTransactionType,
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
