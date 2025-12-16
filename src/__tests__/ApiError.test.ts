// src/__tests__/ApiError.test.ts
import { ApiError } from "../utils/ApiError";

describe("ApiError", () => {
    it("should set status and message", () => {
        const error = new ApiError(404, "Not found");
        expect(error.status).toBe(404);
        expect(error.message).toBe("Not found");
        expect(error.name).toBe("ApiError");
    });
});
