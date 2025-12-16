// src/__tests__/ForecastController.test.ts
import request from "supertest";
import app from "../app";

describe("ForecastController API", () => {
    const apiPrefix = `/api/v1`;

    it("should return forecast for valid coordinates", async () => {
        const response = await request(app)
            .get(`${apiPrefix}/forecast`)
            .query({ latitude: 37, longitude: -93 });
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty("success", true);
        expect(response.body.data).toHaveProperty("shortForecast");
        expect(response.body.data).toHaveProperty("temperature");
        expect(response.body).toHaveProperty("timestamp");
    });

    it("should return 400 for missing coordinates", async () => {
        const response = await request(app)
            .get(`${apiPrefix}/forecast`)
            .query({});
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("success", false);
        expect(response.body).toHaveProperty("error", "Validation error");
        expect(response.body).toHaveProperty("details");
    });

    it("should return 400 for invalid coordinates", async () => {
        const response = await request(app)
            .get(`${apiPrefix}/forecast`)
            .query({ latitude: 999, longitude: 999 });
        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty("success", false);
        expect(response.body).toHaveProperty("error");
    });
});
