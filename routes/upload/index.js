const upload = require("express").Router();
const { jsonFileUpload, helper, calculation } = require("../../utils");

upload.post(
  "/upload",
  jsonFileUpload.single("upload"),
  async (req, res) => {
    const {
      file: { path }
    } = req;

    try {
      // read the json file
      const jsonData = await helper.readFile(path);

      //calculation of apr and irr
      const { apr, irr } = calculation.getAPRAndIRR(jsonData);

      // remove the json file
      await helper.removeFile(path);

      res.status(200).send({ apr, irr });
    } catch (error) {
      res.status(400).send({ error: error.message });
    }
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

module.exports = upload;
