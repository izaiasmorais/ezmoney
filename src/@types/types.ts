export type TransactionProps = {
  id: string;
  title: string;
  price: number;
  description: string;
  type: string;
  createdAt: Date;
};

export type InvoicesProps = {
  id: string;
  title: string;
  price: number;
  dueDate: Date;
  status: string;
};

export type FormDataProps = {
  title: string;
  price: number;
  description: string;
  dueDate?: string;
};

export type ThemeProps = {
  text: {
    body: string;
    sidebar: string;
    paragraphy: string;
  };
  back: {
    body: string;
    boxes: string;
    sidebar: string;
    card: string;
  };
};
