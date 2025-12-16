import { Request, Response, NextFunction } from "express";

export const requestLogger = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {
    const start = Date.now();
    const originalSend = res.send;

    res.send = function (data) {
        const duration = Date.now() - start;
        const timestamp = new Date().toISOString();
        console.log(
            `[${timestamp}] ${req.method} ${req.path} - ${res.statusCode} (${duration}ms)`
        );
        res.send = originalSend;
        return res.send(data);
    };

    next();
};
