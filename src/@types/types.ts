export type TransactionProps = {
  title: string;
  price: number;
  description: string;
  type: string;
  createdAt: Date;
  id: string;
};

export type FormDataProps = {
  title: string;
  price: number;
  description: string;
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
