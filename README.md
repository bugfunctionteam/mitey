# Hatch Layer - API Gateway

## Description

This Hatch Layer is a micro-app built in NextJS used as both a frontend and middle composition layer to help support the Integrations API Gateway Backend services.

### Tech stack

* Typescript
* NextJS
* Preact
* Styled Components
* MSW
* swagger-typescript-api (codegen)

### Important links

* [Architecture Link](https://altruist.atlassian.net/wiki/spaces/PIA/pages/1877180704/Public+API+User+Authentication#Public-API-User-Authentication-Flow)
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

## Ownership

This repository is maintained by the SPG front end team

### Experts

Reach out to the following engineers if you have questions about this repo/service:

- Kyle Williams: [kyle.williams@altruist.com](mailto:kyle.williams@altruist.com), [Slack](https://altruistcorp.slack.com/archives/D02U1MVKZU4)
- David Porcel: [david.porcel@altruist.com](mailto:david.porcel@altruist.com), [Slack](https://altruistcorp.slack.com/archives/D034WGXJC80)
- Chris Jeffery: [chris.jeffery@altruist.com](mailto:chris.jeffery@altruist.com), [Slack](https://altruistcorp.slack.com/archives/D0317AFC6JD)
- Israel Ortiz: [israel.ortiz@altruist.com](mailto:israel.ortiz@altruist.com), [Slack](https://altruistcorp.slack.com/team/U01ST5Z3R4G)


 .----------------.  .----------------.  .----------------.  .----------------.  .----------------. 
| .--------------. || .--------------. || .--------------. || .--------------. || .--------------. |
| |  ____  ____  | || |      __      | || |  _________   | || |     ______   | || |  ____  ____  | |
| | |_   ||   _| | || |     /  \     | || | |  _   _  |  | || |   .' ___  |  | || | |_   ||   _| | |
| |   | |__| |   | || |    / /\ \    | || | |_/ | | \_|  | || |  / .'   \_|  | || |   | |__| |   | |
| |   |  __  |   | || |   / ____ \   | || |     | |      | || |  | |         | || |   |  __  |   | |
| |  _| |  | |_  | || | _/ /    \ \_ | || |    _| |_     | || |  \ `.___.'\  | || |  _| |  | |_  | |
| | |____||____| | || ||____|  |____|| || |   |_____|    | || |   `._____.'  | || | |____||____| | |
| |              | || |              | || |              | || |              | || |              | |
| '--------------' || '--------------' || '--------------' || '--------------' || '--------------' |
 '----------------'  '----------------'  '----------------'  '----------------'  '----------------' 

 
