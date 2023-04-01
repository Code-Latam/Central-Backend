const router = require("express").Router();
const bcrypt = require("bcrypt");
const axios = require('axios');
const dotenv = require("dotenv");
dotenv.config();
var base_url = process.env.BASE_CONFIG_URL ;

//REGISTER USER
router.post("/register", async (req, res) => {
  try {
    const url = base_url + "/api/auth/register"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(200).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})

//LOGIN USER
router.post("/login", async (req, res) => {
  try {
    const url = base_url + "/api/auth/login"
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(req.body)
    });
    const myresponse = await response.json();
    res.status(200).json(myresponse);
  } catch (err) {
    res.status(500).json(err)
  }
})



module.exports = router;