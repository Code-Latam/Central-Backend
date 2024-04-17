const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;



//delete workflow

router.all("/", async (req, res) => {
  try {
    const myHeaders = req.headers
    const destinationUrl = myHeaders["destination"] || "";
    if (!destinationUrl) {
      return res.status(400).json({ error: "Destination URL not provided" });
    }

    
    delete myHeaders['content-length'];
    delete myHeaders['host'];
    const url = myHeaders['destination'];;

    const allowedMethodsForBody = ["POST", "PUT", "PATCH"]; 
    const fetchOptions = {
      method: req.method,
      headers: myHeaders
    };
    
    if (allowedMethodsForBody.includes(req.method.toUpperCase())) {
      fetchOptions.body = JSON.stringify(req.body);
    }

   

    const response = await fetch(url, fetchOptions);
    var responseBody;
    
    const TextBody = await response.text();
    // Only parse as JSON if there's something to parse
    if (TextBody) {
        console.log("IS TEXT BODY")
        console.log(TextBody);
        responseBody = JSON.parse(TextBody);
        console.log("AFTER JSON PARSE");
        console.log(responseBody);
        // Handle JSON data
    } else {
      responseBody = "" ;
    }      
      

    // Relay headers and status code

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
    console.log("RESPONSE STATUS");
    console.log(response.status);
   
    res.status(response.status).json(responseBody);

  } catch (err) {
    res.status(500).json(err);
  }
});




module.exports = router;