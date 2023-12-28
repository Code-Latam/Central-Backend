const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;



//delete workflow

router.all("/", async (req, res) => {
  try {
    // req.body.destination must contains the destination URL
    const destinationUrl = req.body.destination || "";

    if (!destinationUrl) {
      return res.status(400).json({ error: "Destination URL not provided" });
    }


    console.log ("WE ARE IN");
    console.log(req.method);
    console.log("HEADERS");
    console.log(req.headers);
    
    console.log("DESTINATION");
    console.log(req.body.destination);
    const url = req.body.destination;
    delete req.body.destination;
    console.log("BODY")
    console.log( req.method !== 'GET' ? JSON.stringify(req.body) : undefined,);
    
    
    const myHeaders = req.headers
  
    // remove attributes from headers that may interfere with the relay
    delete myHeaders['content-length'];
    delete myHeaders['host'];

    const response = await fetch(url, {
      method: req.method,
      headers: myHeaders,
      body: req.method !== 'GET' ? JSON.stringify(req.body) : undefined
    });

    const responseBody = await response.json(); // Parse response as JSON

    // Relay headers and status code

    console.log("RESPONSE HEADERS");
    console.log(response.headers);
    const responseHeaders = response.headers;

    if (responseHeaders) {
      // Iterate through the headers and set them on the response
      Object.entries(responseHeaders).forEach(([headerName, headerValue]) => {
        res.set(headerName, headerValue);
      });
    }


    res.status(response.status).json(responseBody);
  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;