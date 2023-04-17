import { Router } from "express";
import userController from "../controllers/userController.js";
import { checkAuth } from "../middlewares/checkAuthMiddleware.js";
const router = Router();

router.post("/login", userController.login);
router.post("/registration", userController.registration);
router.get("/getUser", checkAuth, userController.isUserAuth);

export default router;
