const multer = require("multer");

const jsonFileUpload = multer({
  dest: "assets/json",
  fileFilter(req, file, cb) {

    // Validate the json file
    if (!file.originalname.endsWith(".json")) {
      return cb(new Error("Please upload JSON file."));
    }

    // Return if completed
    cb(undefined, true);
  }
});

module.exports = jsonFileUpload;
