![RAIDDON](https://user-images.githubusercontent.com/96427557/200582770-00732e9c-733b-4706-acaf-f7a082bb4e78.png)

This microservice is a flexible and feature-rich javascript that allows you to fetch your [battle.net](https://us.shop.battle.net/en-us) acces token using the [BlizzAPI](https://github.com/blizzapi/blizzapi#blizzapi) in order to access to Blizzard Battle.net APIs.

# Install

`npm install blizzapi`

# Quick start
```javascript
const { BlizzAPI } = require("blizzapi");

/**
 * Or using TypeScript:
 * import { BlizzAPI } from 'blizzapi';
 */

const api = new BlizzAPI({
  region: "us",
  clientId: "client id",
  clientSecret: "client secret",
});

const data = await api.query("/path/to/endpoint");

console.log(data);
```
# Manual build

git clone https://github.com/Farah404/Raiddon <br />
cd Raiddon<br />
cd bnet-access-token-express<br />
npm install<br />
npm run build

# Documentation

Get your client ID and client secret here: [BattleNet dev portal](https://develop.battle.net/)<br />
Official blizzard documentation: [Getting started with bnet API](https://develop.battle.net/documentation/guides/getting-started)

# Legal
This project is not authored, affiliated or endorsed in any way by Blizzard Entertainment.

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.



