# @strictsoftware/fetch

Universal fetch for Node.js and the browser without polyfill/ponyfill.

If you don't need to support a legacy browser that does not provide a native
`fetch` implementation, you can use `@strictsoftware/fetch` instead of
`cross-fetch` or `isomorphic-fetch` to avoid unnecessarily bundling a
ponyfill/polyfill for `fetch` in your client bundle.

## Install

Install with npm:

```
npm install --save @strictsoftware/fetch
```

or `yarn`:

```
yarn add @strictsoftware/fetch
```

**Note:** The installed node module also includes a d.ts file, and thus works
out of the box with **TypeScript**.

## Usage

Import `fetch` and use it just as you would use the browser's `fetch` function
or `node-fetch`:

```js
import fetch from "@strictsoftware/fetch";

async function fetchSomething() {
  return fetch("http://example.com");
}
```
