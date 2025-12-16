// src/__tests__/ForecastService.test.ts

import ForecastService from "../services/ForecastService"

describe('ForecastService', () => {
    it('should return a forecast for valid US coordinates', async () => {
        const testCoords = { latitude: 37, longitude: -93 };
        const result = await ForecastService.getForecastByCoordinates(testCoords);
        expect(result).toBeDefined();
        expect(result).toHaveProperty('shortForecast');
        expect(result).toHaveProperty('temperature');
    });

    it('should throw an error for invalid coordinates', async () => {
        const invalidCoords = { latitude: 999, longitude: 999 };
        await expect(ForecastService.getForecastByCoordinates(invalidCoords)).rejects.toThrow();
    });
});
