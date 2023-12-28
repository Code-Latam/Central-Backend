const express = require('express');
const router = require("express").Router();
const multer = require("multer");
const fs = require("fs");


// Create a storage engine
const storage = multer.diskStorage({
  // Specify the destination folder
    

  destination: (req, file, cb) => {
    const mypath = "public/upload/swaggerdef/" + req.body.clientNr +  "/" + req.body.explorerId
    console.log("PARAMETERS");
    console.log(mypath);
    console.log(req.body);
    console.log("CLIENTNR")
    console.log(req.body.clientNr);
    console.log(file);
    // Create directory if it does not exist
    if (!fs.existsSync(mypath)) {
      fs.mkdirSync(mypath, { recursive: true });
    }

    cb(null, mypath);
  },
  // Specify the filename
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});


// Create a multer middleware
const upload = multer({ storage: storage });

// Use the multer middleware in your router
router.post("/", upload.array("file", 50), (req, res) => {
  // Handle the API call here
  res.status(200).json("Files successfuly uploaded!" );
  return

});


module.exports = router;