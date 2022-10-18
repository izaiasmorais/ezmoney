import produce from "immer";
import { createContext, ReactNode, useContext, useState } from "react";
import { TransactionProps } from "../@types/types";
import { useMoney } from "../contexts/MoneyContext";

interface Props {
  children: ReactNode;
}

interface PaginationContextProps {
  pages: number;
  currentItems: TransactionProps[];
  setCurrentPage: (page: number) => void;
}

export const PaginationContext = createContext({} as PaginationContextProps);

export function PaginationContextProvider({ children }: Props) {
  const { transactions } = useMoney();
  const [itemsPerPage, setItemsPerPage] = useState(7);
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = produce(transactions, (draft) => {
    return draft.slice(startIndex, endIndex);
  });

  const pages = Math.ceil(transactions.length / itemsPerPage);

  return (
    <PaginationContext.Provider value={{ pages, currentItems, setCurrentPage }}>
      {children}
    </PaginationContext.Provider>
  );
}

export function usePagination() {
  return useContext(PaginationContext);
}
