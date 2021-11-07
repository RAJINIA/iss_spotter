const fetchMyIP = function(callback) {
  const request = require("request");
  request('https://api.ipify.org?format=json', (error, response, body) => {
    console.log("aaa");
    if (error) {
      callback(error, undefined);
      return;
    }
    if (response.statusCode !== 200 ) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
  
    const data = JSON.parse(body);
    callback(undefined, data.ip);
  })
  
};

module.exports = { fetchMyIP };

