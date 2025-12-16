import express, { Express, Request, Response, NextFunction } from "express";
import helmet from "helmet";
import cors from "cors";
import { ZodError } from "zod";
import * as dotenv from "dotenv";
import { requestLogger } from "@/middleware/requestLogger";
import apiRoutes from "@/routes/api";
import { ApiError } from "@/utils/ApiError";

dotenv.config();

const app: Express = express();

// Security middleware
app.use(helmet());
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging
app.use(requestLogger);

// Health check endpoint
app.get("/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// API routes
app.use(`/api/${process.env.API_VERSION}`, apiRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(`[Error] ${err.message}`, err);

    if (res.headersSent) {
        return next(err);
    }

    if (err instanceof ApiError) {
        res.status(err.status).json({
            success: false,
            error: err.message,
            statusCode: err.status,
            timestamp: new Date().toISOString(),
        });
        return;
    }

    if (err instanceof ZodError) {
        res.status(400).json({
            success: false,
            error: "Validation error",
            details: err.errors,
        });
        return;
    }

    res.status(500).json({
        success: false,
        error: err.message || "Internal server error",
        statusCode: 500,
        timestamp: new Date().toISOString(),
    });
});

export default app;
