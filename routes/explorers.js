const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;

// Register product
router.post("/register", async (req, res) => {
  try {
    const url = base_url + "/api/explorer/register"
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

//Update Workflow
router.post("/update", async (req, res) => {
  try {
    const url = base_url + "/api/explorer/update";
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

//delete workflow
router.post("/delete", async (req, res) => {
  try {
    const url = base_url + "/api/explorer/delete";
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


// Get One workflow
router.post("/query", async (req, res) => {
  try {
    const url = base_url + "/api/explorer/query";
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

// Get workflows given a product
router.post("/queryall", async (req, res) => {
  try {
    const url = base_url + "/api/explorer/queryall";
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