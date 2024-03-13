const router = require("express").Router();
const multer = require("multer");
const { DirectoryLoader } = require("langchain/document_loaders/fs/directory");
const {JSONLoader} = require("langchain/document_loaders/fs/json");
const {TextLoader} = require("langchain/document_loaders/fs/text");
const {CSVLoader} = require("langchain/document_loaders/fs/csv");
const {PDFLoader} = require("langchain/document_loaders/fs/pdf");
const {DocxLoader} = require("langchain/document_loaders/fs/docx");
const fs = require("fs");
const path = require("path");


// Create a storage engine
const storage = multer.diskStorage({
  // Specify the destination folder
  destination: (req, file, cb) => {
    const mypath = "public/upload/chatbots/" + req.body.clientNr + "/" + req.body.chatbotKey
    console.log("PATH");
    console.log(mypath);
   
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
router.post("/multiple-upload", upload.array("file", 50), (req, res) => {
  const directory = "public/upload/chatbots/" + req.body.clientNr + "/" + req.body.chatbotKey; // the directory you want to delete files from

         
  // Handle the API call here
  const loader = new DirectoryLoader(
    directory,
    {
      ".json": (path) => new JSONLoader(path),
      ".txt": (path) => new TextLoader(path),
      ".csv": (path) => new CSVLoader(path),
      ".pdf": (path) => new PDFLoader(path),
      ".docx": (path) => new DocxLoader(path),
    }
  );
  

  loader.load().then(docs => {
    const mydocsarray = [];
    const mysourcesarray = [];
  
    for (let mydoc of docs) { // Loop through each object in the array
      mydocsarray.push(mydoc.pageContent); // Add the value of the property to the new array
    }
  
    for (let mysource of docs) { // Loop through each object in the array
      mysourcesarray.push(mysource.metadata.source); // Add the value of the property to the new array
    }
    console.log(mydocsarray[0]);
    console.log(mysourcesarray[0]);


    function deleteDirectoryContents(dir) {
      fs.readdir(dir, (err, files) => {
        if (err) {
          console.error("Error reading directory contents:", err);
          return; // Exit the function if we can't read the directory
        }
    
        for (const file of files) {
          fs.unlink(path.join(dir, file), err => {
            if (err) {
              // Log the error and continue with the next file
              console.error('Error deleting file');
            }
          });
        }
      });
    }
    


    const myapibody = { clientNr:req.body.clientNr,
                        gwoken: req.body.gwoken,
                        chatbotMaster: req.body.chatbotMaster,
                        chatbotKey: req.body.chatbotKey,
                        documents: mydocsarray,
                        sources:mysourcesarray
    }

    const base_url = process.env.BASE_CONFIG_URL ;

    
      const url = base_url + "/api/chatbots/adddocs"
      
      fetch(url, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(myapibody)
        })
        .then(response => {
          deleteDirectoryContents(directory);

          res.status(200).json("Files successfuly uploaded!" );
          return
        })
        .catch(error => {
          res.status(401).json("An error occured when loading files into the chatbot" );
          return
        });

  
    // For example, you can send a response with the files information
    
  }).catch(error => {
    // Handle any errors here
  });


});


module.exports = router;