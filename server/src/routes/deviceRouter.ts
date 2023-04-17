import { Router } from "express";
import deviceController from "../controllers/deviceController.js";
import { checkRole } from "../middlewares/checkRoleMiddleware.js";

const router = Router();

router.post("/", checkRole("ADMIN"), deviceController.addDevice);
router.get("/", deviceController.getDevices);
router.get("/:id", deviceController.getDevice);

export default router;
