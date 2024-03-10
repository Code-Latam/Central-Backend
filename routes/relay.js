const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;



//delete workflow

router.all("/", async (req, res) => {
  try {
    const myHeaders = req.headers
    // req.body.destination must contains the destination URL
    const destinationUrl = myHeaders["destination"] || "";

    if (!destinationUrl) {
      return res.status(400).json({ error: "Destination URL not provided" });
    }

    
    delete myHeaders['content-length'];
    delete myHeaders['host'];
    const url = myHeaders['destination'];;

    console.log ("WE ARE IN");
    console.log(req.method);
    console.log("HEADERS");
    console.log(req.headers);
    console.log("RECEIVED REQUEST BODY");
    console.log(req.body)
    
    console.log("DESTINATION");
    console.log(url);
    
    const allowedMethodsForBody = ["POST", "PUT", "PATCH"]; 
    const fetchOptions = {
      method: req.method,
      headers: myHeaders
    };
    
    if (allowedMethodsForBody.includes(req.method.toUpperCase())) {
      fetchOptions.body = JSON.stringify(req.body);
    }

    console.log("FETCH OPTIONS");
    console.log(fetchOptions);

    const response = await fetch(url, fetchOptions);

    const responseBody = await response.json(); // Parse response as JSON

    // Relay headers and status code

    console.log("RESPONSE HEADERS");
    console.log(response.headers);
    console.log("HELLOOOOOOO");
    const responseHeaders = response.headers;
    console.log("hello 2");
    if (responseHeaders) {
      console.log("hello 3");
      // Iterate through the headers and set them on the response
      Object.entries(responseHeaders).forEach(([headerName, headerValue]) =>
       { console.log(`HEADERNAME ${headerName}`)
        // res.set(headerName, headerValue);
      });
    }
    console.log("hello 5");
    console.log(response.status);

    res.status(response.status).json(responseBody);
  } catch (err) {
    console.log("error");
    console.log(err);
    res.status(500).json(err);
  }
});




module.exports = router;