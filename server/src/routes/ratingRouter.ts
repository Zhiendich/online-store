import { Router } from "express";
import ratingController from "../controllers/ratingController.js";

const router = Router();

router.post("/", ratingController.addRating);

export default router;
