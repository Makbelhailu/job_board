const multer = require("multer");
const { S3Client } = require("@aws-sdk/client-s3");
const multerS3 = require("multer-s3");
require("dotenv").config();

const s3 = new S3Client({
  region: "eu-central-1",
  endpoint: process.env.AWS_ENDPOINT,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_KEY,
  },
  forcePathStyle: true,
});

const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: process.env.AWS_BUCKET_NAME,
    acl: "public-read",
    metadata: function (req, file, cb) {
      cb(null, { fieldName: file.fieldname });
    },
    key: function (req, file, cb) {
      const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
      const fileName = `${file.fieldname}-${uniqueSuffix}-${file.originalname}`;
      file.originalname = fileName;
      cb(null, fileName);
    },
  }),
});

const uploadMiddleware = (fieldName) => {
  return (req, res, next) => {
    upload.single(fieldName)(req, res, (err) => {
      if (err) {
        console.error("File Upload Error:", err.message);
        return res
          .status(400)
          .json({ status: false, error: "File upload failed" });
      }
      req.file.location = `${process.env.AWS_PUBLIC_URL}/${process.env.AWS_BUCKET_NAME}/${req.file.originalname}`;
      next();
    });
  };
};

module.exports = { uploadMiddleware, upload };
