import { Router } from "express";
import userRouter from "./userRouter.js";
import deviceRouter from "./deviceRouter.js";
import basketRouter from "./basketRouter.js";
import brandRouter from "./brandRouter.js";
import typeRouter from "./typeRouter.js";
import ratingRouter from "./ratingRouter.js";
import ErrorHandler from "../middlewares/ErrorHandlingMiddleware.js";

const router = Router();

router.use("/user", userRouter);
router.use("/device", deviceRouter);
router.use("/basket", basketRouter);
router.use("/brand", brandRouter);
router.use("/type", typeRouter);
router.use("/rating", ratingRouter);

router.use(ErrorHandler);

export default router;
