const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;

//REGISTER
router.post("/register", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/register"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})
// Get base config info for one chatbot
router.post("/query", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/query";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get master chatbot
router.post("/getmaster", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/getmaster";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get base config info for all chatbot
router.post("/queryall", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/queryall";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

// Get all chatbot by client nr
router.post("/queryallbyclient", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/queryallbyclient";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})



//delete chatbot
router.post("/delete", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/delete";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

//delete chatbot
router.post("/test", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/test";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

//Update chatbot
router.post("/update", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/update";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

//add documents to chatbot
router.post("/adddocs", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/adddocs";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

//add URL pages to chatbot
router.post("/addurl", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/addurl";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

//add URL pages to chatbot
router.post("/crawl", async (req, res) => {
  try {
    const url = base_url + "/api/chatbots/crawl";
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(response.status).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})


module.exports = router;