import { Router } from "express";
import brandController from "../controllers/brandController.js";
import { checkRole } from "../middlewares/checkRoleMiddleware.js";

const router = Router();

router.post("/", checkRole("ADMIN"), brandController.addBrand);
router.get("/getBrands", brandController.getBrands);

export default router;
