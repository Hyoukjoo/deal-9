import multer from "multer";
import multerS3 from "multer-s3";
import aws from "aws-sdk";
import env from "../../config/env.js";

const { AWS_ACCSS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION } = env;

const s3 = new aws.S3({
  accessKeyId: AWS_ACCSS_KEY_ID,
  secretAccessKey: AWS_SECRET_ACCESS_KEY,
  region: AWS_REGION,
});

const storage = multerS3({
  s3,
  bucket: "deal-9",
  contentType: multerS3.AUTO_CONTENT_TYPE,
  acl: "public-read",
  metadata: function (req, file, cb) {
    cb(null, { fieldName: file.fieldname });
  },
  key: function (req, file, cb) {
    cb(null, `uploads/${Date.now()}_${file.originalname}`);
  },
});

export default multer({ storage });
