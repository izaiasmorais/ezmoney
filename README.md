# PDV

![image](https://github.com/user-attachments/assets/dec58443-e2e4-452e-b785-e7e3404b49e9)

## Introdução

Um dashboard completo de controle de finanças que permite gerenciar transações, contas à pagar e orçamentos com facilidade, oferecendo relatórios detalhados e ferramentas intuitivas para organizar sua vida financeira em um só lugar.

<img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=724cff&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=NODE&message=V20.18.1&color=724cff&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=724cff&style=for-the-badge"/>

## Tecnologias

- Linguagem: [TypeScript](https://www.typescriptlang.org/)
- Biblioteca: [ReactJS](https://react.dev/)
- Framework: [Next.js](https://nextjs.org/)
- Componentes: [Shadcn-ui](https://ui.shadcn.com/)
- Conexão com API: [Axios](https://axios-http.com/docs/intro)
- Gerenciamento de estados gloabais: [Zustand](https://zustand-demo.pmnd.rs/)
- Gerenciamento de estados http: [React Query](https://tanstack.com/query/latest/docs/framework/react/overview)
- Gerenciamento de formulários: [React Hook Form](https://www.react-hook-form.com/)
- Validação: [Zod](https://zod.dev/)
- Testes: [Playwirght](https://playwright.dev/)

## Funcionalidades

- [ ] Autenticação via Clerk
- [ ] Dashboard com gráficos detalhados.
- [ ] Gerencimento de faturas.
- [ ] Gerenciamento de transações.
- [ ] Gerenciamento de contas bancárias.
- [ ] Gerencimento de metas.
- [ ] Calendário.

## Instalação

Clone o repositório:

```bash
git clone https://github.com/izaiasmorais/ezmoney
cd ezmoney
```

Instale as dependências:

```bash
pnpm install
```

Configure o arquivo .env com suas credenciais:

```env
ENV=
```

## Executando o Projeto

Inicie o servidor:

```bash
pnpm dev
```

## Executando testes

Executar todos os testes no termial:

```bash
pnpm test
```

Executar todos os testes através da UI do Playwright:

```bash
pnpm play
```
