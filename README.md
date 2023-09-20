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
