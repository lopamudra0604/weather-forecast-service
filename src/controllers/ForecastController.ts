import { Request, Response, NextFunction } from "express";
import { ForecastQuerySchema } from "@/models/Forecast";
import ForecastService from "@/services/ForecastService";

class ForecastController {
    async getForecastByCoords(
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<void> {
        try {
            const validatedQuery = ForecastQuerySchema.parse(req.query);
            const forecast = await ForecastService.getForecastByCoordinates(validatedQuery);

            res.status(200).json({
                success: true,
                data: forecast,
                timestamp: new Date().toISOString(),
            });
        } catch (error) {
            next(error);
        }
    }
}

export default new ForecastController();