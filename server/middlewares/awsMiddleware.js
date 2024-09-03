const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");

const s3 = new S3Client({
  region: "eu-central-1",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "resume",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      cb(null, file.fieldname + "-" + uniqueSuffix + "-" + file.originalname);
    },
  }),
});

const uploadMiddleware = () => {
  return (req, res, next) => {
    upload.single("resume")(req, res, (err) => {
      if (err) {
        console.error("File Upload Error:", err);
        return res
          .status(400)
          .json({ status: false, error: "File upload failed" });
      }
      next();
    });
  };
};

module.exports = uploadMiddleware;
