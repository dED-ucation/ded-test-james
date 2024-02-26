
## Instructions to run Cypress tests

Beginning in the directory `cypress`:

Install dependencies:

```
npm ci
```

Run all tests on staging server/production server (see `package.json` scripts):

```
npm run cypress:staging run
npm run cypress:production run
```

Run a specific test on staging server server, eg. `university-search`:

```
npx run cypress:staging run -- --spec 'cypress/e2e/university-search.cy.ts'
```

Run all tests on staging server with GUI:

```
npm run cypress:staging open
```


## Instructions to run Jest tests

Beginning in the directory `jest`:

In one teriminal, build and run the mini NextJS site:

```
npm ci
npm run build
npm run start
```

In as second terminal:

To run all tests:

```
npm run test:ci
```

To run a specific test, eg. `app/counter.test.tsx`:

```
npm run test:ci -t counter
```


## Instructions to run Playwright tests

Beginning in the directory `playwright`:

...

