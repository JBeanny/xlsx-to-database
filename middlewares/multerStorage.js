const multer = require("multer");

const storage = multer.memoryStorage({
  filename: (req, file, cb) => {
    if (
      file.mimetype ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      cb(null, file.originalname);
    } else {
      throw new Error("Only XLSX file are allowed");
    }
  },
});

const upload = multer({ storage: storage }).single("file");

module.exports = upload;
