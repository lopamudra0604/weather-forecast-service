// src/config/swagger.ts
// Loads a static OpenAPI JSON file produced at project root (open_api.json)
import swaggerJson from '../../open_api.json';

const swaggerSpec = swaggerJson as Record<string, unknown>;

export default swaggerSpec;
