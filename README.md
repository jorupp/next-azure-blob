# Reproduction case for NextJS + Azure Blob Storage issue

## Steps to create this repository

- `npx create-next-app@latest next-azure-blob`
- `npm install --save @azure/storage-blob`
- set `STORAGE_ACCOUNT_NAME` and `STORAGE_ACCOUNT_KEY` environment variables
- Add code to call azure storage

## Repro steps

1. `npm install`
2. `npm run dev` - open <http://localhost:3000> and confirm it works.
3. `npm run build && next start` - open <http://localhost:3000> and watch server console.

Expected: works in dev and production modes.
Actual: works in dev, gives a `TypeError: Expected signal to be an instanceof AbortSignal` error in production mode.

### Testing with other versions

13.4.19: **works** - `npm install --save next@13.4.19 eslint-config-next@13.4.19`
13.5.1: **fails** - `npm install --save next@13.5.1 eslint-config-next@13.5.1`
13.5.2: **fails** - `npm install --save next@13.5.2 eslint-config-next@13.5.2`
13.5.2-canary.2: **fails** - `npm install --save next@canary eslint-config-next@13.5.2` (as of 2023-09-20 18:30 UTC)
