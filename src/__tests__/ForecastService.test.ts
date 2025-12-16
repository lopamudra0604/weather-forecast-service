// src/__tests__/ForecastService.test.ts

import ForecastService from "../services/ForecastService"

describe('ForecastService', () => {
    it('should return a forecast for valid London coordinates', async () => {
        const londonCoords = { latitude: 51.5074, longitude: -0.1278 };
        const result = await ForecastService.getForecastByCoordinates(londonCoords);
        expect(result).toBeDefined();
        expect(result).toHaveProperty('shortForecast');
        expect(result).toHaveProperty('temperature');
    });

    it('should throw an error for invalid coordinates', async () => {
        const invalidCoords = { latitude: 999, longitude: 999 };
        await expect(ForecastService.getForecastByCoordinates(invalidCoords)).rejects.toThrow();
    });
});
