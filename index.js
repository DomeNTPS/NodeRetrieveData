var axios = require("axios");

axios
  .get("https://codequiz.azurewebsites.net/", {
    responseType: 'json',
    headers: { Cookie: "hasCookie=true;"},
  })
  .then((response) => {
    // console.log(response)
    const input = `${process.argv[2]}`
    const regEx = `${input}\\s?\\<\\/td\\>\\<td\\>\(\\d+.\\d+)`
    const regEx2 = new RegExp(regEx)
    console.log(response.data.match(regEx2)[1])
  });