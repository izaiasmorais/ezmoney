# EZMoney

![image](https://github.com/user-attachments/assets/584b4da7-224d-4f4c-aec0-fae4388f59f8)

## Introdução

Um dashboard completo de controle de finanças que permite gerenciar transações, contas à pagar e orçamentos com facilidade, oferecendo relatórios detalhados e ferramentas intuitivas para organizar sua vida financeira em um só lugar.

<img src="https://img.shields.io/static/v1?label=STATUS&message=DEVELOPING&color=A855F7&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=NODE&message=V20.18.1&color=A855F7&style=for-the-badge"/> <img src="https://img.shields.io/static/v1?label=LICENSE&message=MIT&color=A855F7&style=for-the-badge"/>

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

- [x] Autenticação via Better Auth.
- [x] Modo noturno.
- [x] Design responsivo.
- [x] Dashboard com gráficos sobre transações.
- [x] Gerencimento de faturas.
- [x] Gerenciamento de transações.
- [ ] Gerenciamento de contas bancárias.
- [ ] Gerencimento de metas.
- [ ] Calendário de pagamentos.

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
NODE_ENV=development

DATABASE_URL=

GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

BETTER_AUTH_SECRET=0392er0iweed9083y2edd
```

## Executando o Projeto

Suba as migrações para o seu banco de dados:
```bash
pnpm migrate
```

Gere o schema do Prisma:
```bash
pnpm generate
```

Inicie o servidor:
```bash
pnpm dev
```
