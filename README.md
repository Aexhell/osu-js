I decided to make my own version of the osu api.

# Install
* NPM:
`npm install @aexhell/osu-js`

# Example
```js
const Osu = require("@aexhell/osu-js");
const client = new Osu("API-KEY");

client.getOsu({ u: "aexhel" }).then(user => console.log(user));
```

# Dependencies
* [superagent](https://npmjs/package/superagent).