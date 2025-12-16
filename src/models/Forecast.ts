import { z } from "zod";

export const ForecastQuerySchema = z.object({
    latitude: z.coerce.number().min(-90).max(90),
    longitude: z.coerce.number().min(-180).max(180),
});

export type ForecastQuery = z.infer<typeof ForecastQuerySchema>;

export interface Period {
    number: number;
    name: string;
    startTime: string;
    endTime: string;
    isDaytime: boolean;
    temperature: number;
    temperatureUnit: string;
    temperatureTrend: string | null;
    windSpeed: string;
    windDirection: string;
    icon: string;
    shortForecast: string;
    detailedForecast: string;
}

export interface ForecastData {
    properties: {
        updated: string;
        validTimes: string;
        elevation: {
            value: number;
            unitCode: string;
        };
        periods: Period[];
    };
}

export interface TodaysForecast {
    shortForecast: string;
    temperature: string;
}

export interface PointsData {
    properties: {
        forecast: string;
    };
}