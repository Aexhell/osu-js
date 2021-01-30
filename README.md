I decided to make my own version of the osu api.

# Install
`npm install @aexhell/osu-js`
or
`yarn install @aexhell/osu-js`

# Example
```js
const Osu = require("@aexhell/osu-js");
const client = new Osu.Api("API-KEY");

client.getUser({ u: "aexhel" }).then(user => console.log(user));
```

# Dependencies
* [superagent](https://npmjs/package/superagent).