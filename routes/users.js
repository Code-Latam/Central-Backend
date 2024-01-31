const router = require("express").Router();
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;

//UPDATE USER
router.post("/update", async (req, res) => {
    try {
      const url = base_url + "/api/users/update"
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

//Query one user for a chatbot and name combination
router.post("/query", async (req, res) => {
  try {
    const url = base_url + "/api/users/query"
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

router.post("/explorers", async (req, res) => {
  try {
    const url = base_url + "/api/users/explorers"
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

//Query all users for a chatbot
router.post("/queryall", async (req, res) => {
  try {
    const url = base_url + "/api/users/queryall"
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

//Query all users for a chatbot
router.post("/delete", async (req, res) => {
  try {
    const url = base_url + "/api/users/delete"
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