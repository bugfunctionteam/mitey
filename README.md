# Mitey

## Description

This Hatch Layer is a micro-app built in NextJS used as both a frontend and middle composition layer to help support the Integrations API Gateway Backend services.

### Tech stack

* Typescript
* NextJS
* Styled Components
* MSW
* swagger-typescript-api (codegen)

### Important links

* [local](http://localhost:3000)

### Feature flags

To Be Continued...

## How-to

### Set up the project
1. Clone the repo
2. Install `nvm`.
   Look up the latest version [here](https://github.com/nvm-sh/nvm/releases).
   `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash`
3. Install and use project node version from `.nvmrc`: `nvm install && nvm use`
4. Add `.env.local` and `.env.test.local` in the root directory. Environment variables for the BFF can be found [here](https://gitlab.com/a7783/broker-dealer/front-end/auth-webapp).
5. Run `npm install`
6. Run `npm run dev`. This will spin up a server on `localhost:3000`

### Run tests

We have two test projects.

- Frontend
- Backend

To run all of them at the same time, run `npm run test`.

To run one test project, use `npm run test:unit`, `npm run test:integration`, or `npm run test:legacy`.

Here are some other variants:

- Run multiple projects `npm run test --projects jest.unit.config.js jest.integration.config.js`
- Run a single file `npm run test path/to/file`
- Watch tests `npm run test:watch`
- Verbose logs `npm run test --verbose`
### Run the app locally
1. Run `npm install`
2. Run `npm run dev`. This will spin up a server on `localhost:3000`

### Troubleshooting

- delete `node_modules`, run `npm run cache clean --force` then `npm run install --force --verbose`
