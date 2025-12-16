// src/__tests__/ForecastModel.test.ts
import { ForecastQuerySchema } from "../models/Forecast";

describe("ForecastQuerySchema", () => {
    it("should validate correct coordinates", () => {
        const valid = { latitude: 40, longitude: -75 };
        expect(() => ForecastQuerySchema.parse(valid)).not.toThrow();
    });

    it("should throw for invalid latitude", () => {
        const invalid = { latitude: 100, longitude: 0 };
        expect(() => ForecastQuerySchema.parse(invalid)).toThrow();
    });

    it("should throw for invalid longitude", () => {
        const invalid = { latitude: 0, longitude: 200 };
        expect(() => ForecastQuerySchema.parse(invalid)).toThrow();
    });
});
