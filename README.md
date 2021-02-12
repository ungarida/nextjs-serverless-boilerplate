# NextJS Boilerplate

This project is my personal and opinionated boilerplate for [NextJS](https://nextjs.org/)-based web applications deployed into AWS using [Serverless](https://www.serverless.com/blog/serverless-nextjs). NextJS slogan is "The React Framework for Production", this boilerplate is aiming to add all the moving parts needed by an high standards web development project.

## Base

First of all, this boilerplate didn't start from scratch but from [NextJS with-typescript-eslint-jest example](https://github.com/vercel/next.js/tree/canary/examples/with-typescript-eslint-jest). It is configured with:

- [Typescript](https://www.typescriptlang.org/)
- Linting with [ESLint](https://eslint.org/)
- Formatting with [Prettier](https://prettier.io/)
- Linting, typechecking and formatting on by default using [`husky`](https://github.com/typicode/husky) for commit hooks
- Testing with [Jest](https://jestjs.io/) and [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro)
- Deployment with [Serverless](https://github.com/serverless-nextjs/serverless-next.js)

### Git Hooks

1. `pre-commit`: [lint-staged](https://github.com/okonet/lint-staged) runs linters against staged git files
1. `commit-msg`: [commitlint](https://github.com/conventional-changelog/commitlint) configured with [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
1. `pre-push`: `yarn run type-check`

### Workflow

The project is leveraging [GitHub Actions](https://docs.github.com/en/actions) to organize development workflow. It is inspired by [next-serverless-github-actions](https://github.com/dabit3/next-serverless-github-actions).
