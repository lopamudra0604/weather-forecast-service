
import { ForecastData, ForecastQuery, TodaysForecast, PointsData } from "@/models/Forecast";
import { ApiError } from "@/utils/ApiError";

class ForecastService {
    private readonly WEATHER_GOV_POINTS_API = process.env.WEATHER_GOV_POINTS_API ?? "https://api.weather.gov/points";
    private readonly USER_AGENT = process.env.USER_AGENT ?? "WeatherForecastService/1.0 (myemail@gmail.com)";

    async getForecastByCoordinates(query: ForecastQuery): Promise<TodaysForecast> {
        try {
            const pointsUrl = `${this.WEATHER_GOV_POINTS_API}/${query.latitude},${query.longitude}`;
            const pointsResponse = await fetch(pointsUrl, {
                headers: {
                    "User-Agent": this.USER_AGENT,
                },
            });

            if (!pointsResponse.ok) {
                const errorData = await pointsResponse.json().catch(() => ({}));
                const errorMessage = (errorData as any).title || (errorData as any).detail || pointsResponse.statusText;
                throw new ApiError(pointsResponse.status, `Weather.gov points API error: ${errorMessage}`);
            }

            const pointsData: PointsData = await pointsResponse.json();
            const forecastUrl = pointsData.properties.forecast;
            const forecastResponse = await fetch(forecastUrl, {
                headers: {
                    "User-Agent": this.USER_AGENT,
                },
            });

            if (!forecastResponse.ok) {
                const errorData = await forecastResponse.json().catch(() => ({}));
                const errorMessage = (errorData as any).title || (errorData as any).detail || forecastResponse.statusText;
                throw new ApiError(forecastResponse.status, `Weather.gov forecast API error: ${errorMessage}`);
            }

            const forecastData: ForecastData = await forecastResponse.json();
            const periods = forecastData.properties.periods;

            if (!periods || periods.length === 0) {
                throw new ApiError(404, "No forecast periods available");
            }

            const todayPeriod = periods.find((period) => period.isDaytime);

            if (!todayPeriod) {
                throw new ApiError(404, "No daytime forecast available");
            }

            return {
                shortForecast: todayPeriod.shortForecast,
                temperature: todayPeriod.temperature > 80 ? "Hot" : todayPeriod.temperature >= 50 ? "Moderate" : "Cold",
            };
        } catch (error) {
            if (error instanceof ApiError) {
                throw error;
            }
            if (error instanceof Error) {
                throw new ApiError(500, `Failed to fetch forecast: ${error.message}`);
            }
            throw new ApiError(500, "Failed to fetch forecast");
        }
    }
}

export default new ForecastService();
