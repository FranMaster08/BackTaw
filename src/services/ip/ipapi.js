
const axios = require("axios");
const getLocation = async (ip) => {
  let config = {
    method: "get",
    url: `http://ip-api.com/json/${ip}`,
  };
  let result = await axios(config);
  return result.data;
};

module.exports = { getLocation };
