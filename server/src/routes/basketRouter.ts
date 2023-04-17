import { Router } from "express";
import basketController from "../controllers/basketController.js";

const router = Router();

router.get("/getBasket/:id", basketController.getUserBasket);
router.get("/:id", basketController.getBasketDevices);
router.post("/", basketController.addDevice);
router.delete("/", basketController.deleteDevice);

export default router;
