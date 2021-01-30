I decided to make my own version of the osu api.

# Example
```js
const Osu = require("@aexhell/osu-js");
const client = new Osu("API-KEY");

client.getOsu({ u: "aexhel" }).then(user => console.log(user));
```

# Dependencies
* [superagent](https://npmjs/package/superagent).