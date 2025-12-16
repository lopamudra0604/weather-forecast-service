import ForecastController from "@/controllers/ForecastController";
import { Router } from "express";

const router = Router();

router.get("/forecast", ForecastController.getForecastByCoords);

export default router;
