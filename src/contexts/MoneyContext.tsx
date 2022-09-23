import { useState, ReactNode, createContext, useContext } from "react";

interface MoneyContextProviderProps {
  children: ReactNode;
}

interface MoneyContextType {
  transactionType: string;
  setTransactionType: (value: string) => void;
}

export const MoneyContext = createContext({} as MoneyContextType);

export function MoneyContextProvider({ children }: MoneyContextProviderProps) {
  const [transactionType, setTransactionType] = useState("");

  return (
    <MoneyContext.Provider value={{ transactionType, setTransactionType }}>
      {children}
    </MoneyContext.Provider>
  );
}

export function useMoney() {
  const money = useContext(MoneyContext);

  return money;
}
