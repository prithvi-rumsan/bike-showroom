const config = require("config");

class Verification {
  constructor() {}
  validation(payload) {
    if (
      payload.username === "prithvi.maharjan@rumsan.com" &&
      payload.password === "Apple123"
    ) {
      let user = {};
      user.name = payload.username;
      user.token = config.get("app.access_token");
      return user;
    }
  }

  tokenCheck(payload) {
    if (payload === "@#&ff38@4&!0@c%513%&503b^40!#622") {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = new Verification();
