const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;

//REGISTER client
router.post("/register", async (req, res) => {
  try {
    const url = base_url + "/api/clients/register"
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
// Get One client
router.post("/query", async (req, res) => {
  try {
    const url = base_url + "/api/clients/query";
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

// Get all clients
router.post("/queryall", async (req, res) => {
  try {
    const url = base_url + "/api/clients/queryall";
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


//delete client
router.post("/delete", async (req, res) => {
  try {
    const url = base_url + "/api/clients/delete";
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


//Update client
router.post("/update", async (req, res) => {
  try {
    const url = base_url + "/api/clients/update";
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