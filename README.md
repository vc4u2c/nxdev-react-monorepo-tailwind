# NxdevReactMonorepo

- NxDev React Monorepo with 2 React Apps & 3 shared libraries.
- Styled with Tailwind and ShadCN
- [Building React Apps in an Nx Monorepo](https://nx.dev/getting-started/tutorials/react-monorepo-tutorial)

## Initial Setup

```bash
cd C:\Users\vinod.chandran\Documents\Source\Repos
git clone https://github.com/vc4u2c/nxdev-react-monorepo-tailwind.git
cd nxdev-react-monorepo-tailwind
npm i

# Building the Apps for Deployment
npx nx run-many -t build

# Run the apps
npx nx serve store
npx nx serve inventory

# Run Unit tests in parallel
npx nx run-many -t test
npx nx view-logs

# Run E2E tests in parallel
npx nx run-many -t e2e
npx playwright show-report .\dist\.playwright\apps\store-e2e\playwright-report
npx playwright show-report .\dist\.playwright\apps\inventory-e2e\playwright-report
```

## Monorepo Creation Setup

This is how the Monorepo was setup. Please follow the section above if cloning the code.

```bash
# This setup along with commit history describes how the repo was created
# Download and install Node.js v20.12.0 from https://nodejs.org/en

# Download and Install Git SCM: https://git-scm.com/download/win
# 64 Bit Standalone Installer for Windows: https://github.com/git-for-windows/git/releases/download/v2.44.0.windows.1/Git-2.44.0-64-bit.exe

# Install VS Code extension Tailwind CSS IntelliSense

# Open VS Code
# CTRL + ` to open terminal

cd .\Documents\Source\Repos\React\
git config --global init.defaultBranch main

npm i -g npm@latest
npm -v
node-v
npm i -g nx

# Create a new React monorepo with the following command
npx create-nx-workspace@latest nxdev-react-monorepo --preset=react-monorepo
# √ Application name · store
# √ Which bundler would you like to use? · vite
# √ Test runner to use for end to end (E2E) tests · playwright
# √ Default stylesheet format · tailwind
# √ Set up CI with caching, distribution and test deflaking · false

cd nxdev-react-monorepo
code . -r

# Verify we are in main branch
git branch

# Serve the application
npx nx serve store

# Inferred Tasks: Nx identifies available tasks for your project from tooling configuration files, package.json scripts and the targets defined in project.json.
# To view the tasks that Nx has detected, look in the Nx Console project detail view or run the following
npx nx show project store --web
# CTRL + C in VS Code Terminal to close

# Build
npx nx run store:build

# Unit Test
npx nx test store

# End to End Test
npx nx e2e store-e2e
npx playwright show-report .\dist\.playwright\apps\store-e2e\playwright-report

# Static Serve
# TODO: Not working
# ENOENT: no such file or directory, copyfile 'C:\Users\Vinod Chandran\Documents\Source\Repos\React\nxdev-react-monorepo\{workspaceRoot}\dist\apps\store\index.html' -> 'C:\Users\Vinod Chandran\Documents\Source\Repos\React\nxdev-react-monorepo\{workspaceRoot}\dist\apps\store\404.html'
npx nx run store:serve-static

# List built in generators in Nx React
npx nx list @nx/react

# Inferred Tasks: Nx identifies available tasks for your project from tooling configuration files, package.json scripts and the targets defined in project.json.
# To view the tasks that Nx has detected, look in the Nx Console project detail view or run the following
npx nx show project store --web
# CTRL + C in VS Code Terminal to close

# Add / Generate another application
# npx nx g @nx/react:app inventory --directory=apps/inventory --dry-run
npx nx g @nx/react:app inventory --directory=apps/inventory
# √ Would you like to add React Router to this application? (y/N) · true
# √ Which E2E test runner would you like to use? · playwright
# √ What should be the project name and where should it be generated? · inventory @ apps/inventory

# Serve the application
npx nx serve inventory

# Build
npx nx run inventory:build

# Unit Test
npx nx test inventory

# End to End Test
npx nx e2e inventory-e2e
npx playwright show-report .\dist\.playwright\apps\inventory-e2e\playwright-report

# Preview
npx nx run inventory:preview

# Sharing Code with Local Libraries
npx nx g @nx/react:library products --directory=libs/products --unitTestRunner=vitest --bundler=none
# √ What should be the project name and where should it be generated? · products @ libs/products
npx nx g @nx/react:library orders --directory=libs/orders --unitTestRunner=vitest --bundler=none
# √ What should be the project name and where should it be generated? · orders @ libs/orders
npx nx g @nx/react:library shared-ui --directory=libs/shared/ui --unitTestRunner=vitest --bundler=none
# √ What should be the project name and where should it be generated? · shared-ui @ libs/shared/ui

# Move libs/my-feature-lib to libs/shared/my-feature-lib:
# npx nx g @nx/workspace:move --project my-feature-lib --destination shared/my-feature-lib

# Delete the components generated for each of these projects

# Create and expose a ProductList component from libs/products library.
npx nx g @nx/react:component product-list --project=products --directory="libs/products/src/lib/product-list"
# √ Should this component be exported in the project? (y/N) · true
# √ Where should the component be generated? · libs/products/src/lib/product-list/product-list.tsx

# Create and expose a OrderList component from libs/orders library.
npx nx g @nx/react:component order-list --project=orders --directory="libs/orders/src/lib/order-list"
# √ Should this component be exported in the project? (y/N) · true
# √ Where should the component be generated? · libs/orders/src/lib/order-list/order-list.tsx

# Building the Apps for Deployment
npx nx run-many -t build

# Run Unit tests in parallel
npx nx run-many -t test
npx nx view-logs
# Run E2E tests in parallel
npx nx run-many -t e2e
npx playwright show-report .\dist\.playwright\apps\store-e2e\playwright-report
npx playwright show-report .\dist\.playwright\apps\inventory-e2e\playwright-report
npx nx serve store
npx nx serve inventory

# Install Netlify CLI
npm install -g netlify-cli

# Linting
npx nx run-many -t lint

# Building
npx nx run-many -t build

# Building the Apps for Deployment
nx affected -t deploy

# Show the project dependency graph
npx nx graph
npx nx graph --affected

npx shadcn-ui@latest init
# √ Would you like to use TypeScript (recommended)? ... no / yes
# √ Which style would you like to use? » New York
# √ Which color would you like to use as base color? » Slate
# √ Where is your global CSS file? ... globals.css
# √ Would you like to use CSS variables for colors? ... no / yes
# √ Are you using a custom tailwind prefix eg. tw-? (Leave blank if not) ...
# √ Where is your tailwind.config.js located? ... tailwind.config.js
# √ Configure the import alias for utils: ... @/lib/utils
# √ Are you using React Server Components? ... no / yes
# √ Write configuration to components.json. Proceed? ... yes

npx shadcn-ui@latest add button

# Imposing Constraints with Module Boundary Rules
# type:feature should be able to import from type:feature and type:ui
# type:ui should only be able to import from type:ui
# scope:orders should be able to import from scope:orders, scope:shared and scope:products
# scope:products should be able to import from scope:products and scope:shared
```

## Integrate with editors

Enhance your Nx experience by installing [Nx Console](https://nx.dev/nx-console) for your favorite editor. Nx Console
provides an interactive UI to view your projects, run tasks, generate code, and more! Available for VSCode, IntelliJ and
comes with a LSP for Vim users.

## Start the application

Run `npx nx serve store` to start the development server. Happy coding!

## Build for production

Run `npx nx build store` to build the application. The build artifacts are stored in the output directory (e.g. `dist/` or `build/`), ready to be deployed.

## Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/nx-cloud/features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.

- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
