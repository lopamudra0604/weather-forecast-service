// src/__tests__/requestLogger.test.ts
import { requestLogger } from "../middleware/requestLogger";

describe("requestLogger middleware", () => {
    it("should call next and not throw", () => {
        const req = { method: "GET", path: "/test" } as any;
        const res = {
            send: jest.fn(function (this: any, data: any) { return data; })
        } as any;
        const next = jest.fn();
        requestLogger(req, res, next);
        expect(next).toHaveBeenCalled();
    });
});
