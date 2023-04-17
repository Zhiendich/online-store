import { Router } from "express";
import typeController from "../controllers/typeController.js";
import { checkRole } from "../middlewares/checkRoleMiddleware.js";

const router = Router();

router.post("/", checkRole("ADMIN"), typeController.addType);
router.get("/getTypes", typeController.getTypes);

export default router;
