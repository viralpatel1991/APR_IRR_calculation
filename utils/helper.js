const fs = require("fs");

const readFile = filePath => {
  try {
    const data = fs.readFileSync(filePath, "utf8");

    if (data.length) {
      return JSON.parse(data);
    }

    return {};
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("File not found")
    } else {
      throw err;
    }
  }
};

const removeFile = filePath => {
  try {
    fs.unlinkSync(filePath);
  } catch (err) {
    if (err.code === "ENOENT") {
      throw new Error("File not found")
    } else {
      throw err;
    }
  }
};

module.exports = {
  readFile,
  removeFile
};
