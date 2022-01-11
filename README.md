![Mobister](https://www.mobister.com.br/app/themes/mob/dist/images/logo-mobister.svg)

# Boilerplate Next.js

Um boilerplate para projetos em [**Next.js**](https://nextjs.org/) como front-end SPA.

O boilerplate foi criado sobre o template [**create-next-app**](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Para mais informações sobre o processo de desenvolvimento ver [documentação](#documentação).

## Dependências

- nodejs: `^v14.18.1`
- yarn: `^1.22.17`

---

## Instalação local

### Variáveis de ambiente

Duplicar o arquivo `.env.example` e renomear para `.env`.
Definir o valor da variável `GRAPHQL_API` para o endereÃ§o da api.

### Produção

1. `yarn` para instalar as dependências.
2. `yarn build` para a geração da pasta .next (conteÃºdo do site).
3. `yarn start` para iniciar a aplicação.

### Desenvolvimento

1. `yarn` para instalar as dependências;
2. `yarn prepare` para realizar as configurações do husky (Este ponto é importante para a padronização do código).
3. `yarn dev` para iniciar a aplicação.

---

## Comandos adicionais

Para o desenvolvimento existem mais três comandos auxiliares.

- `yarn lint` validação da padronização do códgio.
- `yarn type-check` validação do typescript.
- `yarn format` formatação do código.

Os dois primeiros são executados de forma automática assim que algum `git commit` for realizado.

Caso a validação não tenha sucesso, o commit será interrompido.

Nesse caso, verifique o log no terminal e execute o `yarn format`.

Caso o format não resolva, realize a correção de forma manual.

Existe também uma validação, realizada pelo husky, para a padronização dos commits.
Leia sobre em https://github.com/conventional-changelog/commitlint/#what-is-commitlint

### Commitizen

O projeto vem com o commitizen integrado, o que possibilita a criação dos commits de forma dinâmica e visual. Basta trocar o `git commit` por `yarn commit` para utilizar a interface no terminal, seguir as instruções ao criar o commit.

## Documentação

[Documentação](https://docs.google.com/document/d/1Ejphhb4UaRdBaUlte2Vvhw4YAuBtywQFvXNItSyauAE)
