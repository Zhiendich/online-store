import express, { Application } from "express";
import dotenv from "dotenv";
import cors from "cors";
import db from "./db/db.js";
import router from "./routes/router.js";
import multer from "multer";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const app: Application = express();
dotenv.config();

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, `${__dirname}/public/images`);
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

app.use(express.json());
app.use(cors());
app.use("/api", router);
const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await db.connect().catch((error: Error) => {
      console.log("Failed to connect to database", error);
    });
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const upload = multer({ storage });
app.use("/api/images", express.static(path.join(__dirname, "public/images")));
app.post("/api/upload", upload.single("file"), (req, res) => {
  try {
    return res.status(200).json("File uploded successfully");
  } catch (error) {
    console.error(error);
    return res.status(200).json(error);
  }
});
