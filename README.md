<div align="center"><img src="https://qph.fs.quoracdn.net/main-qimg-744f96b18fb3ef81b05512d78b679e25" width="100px" height="100px"></img></div>

# Next.js Boilerplate

A base project using Next.js set up with:

- Typescript
- Styled-components
- Bootstrap 5
- Sass
- Apollo/client
- Eslint/Prettier
- Husky

## Installation

To create a new project using this template you can:

#### 1 - Create a fresh next-app using

```bash
  npx create-next-app -e https://github.com/ramonmetzker/boilerplate-nextjs
```

or

```bash
  yarn create next-app -e https://github.com/ramonmetzker/boilerplate-nextjs
```

#### 2 - Clone this repository

## Runnig the project locally

Go to the project directory and run `yarn` or `npm install` to install the dependencies and run `yarn prepare` or `npm run prepare` to set up husky in the project, this is essential to keep the standard in your code.

The project comes with some scripts:

#### To start the development server

Run `yarn dev` or `npm run dev`

#### To check Typescript rules

Run `yarn check-types` or `npm run check-types`

#### To check for Eslint errors

Run `yarn check-lint` or `npm run check-lint`

#### To check for Prettier errors

Run `yarn check-format` or `npm run check-format`

Additionally you can run `yarn format` or `npm run format` to format your code according to the rules set by Prettier/Eslint.

#### To check for TS, Eslint and Prettier errors all at once

Run `yarn test-all` or `npm run test-all`

### Husky

This project comes with Husky pre-commit scripts. So every time you try to commit something, husky will run all of those tests mentioned above and will only commit your changes if they all pass. That is why it is essential that you run `yarn prepare` before anything.

## Author

- [@ramonmetzker](https://www.github.com/ramonmetzker)

## Contributing

If you have contributions to make, I am open to pull requests! Also, feel free to contact me for any clarification, suggestion or anything!
