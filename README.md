# Weather Forecast Service

A production-ready Node.js + TypeScript + Express service that integrates with 3rd party weather APIs.

## Features

- ✅ TypeScript strict mode
- ✅ Controller-Service-Repository pattern
- ✅ HttpClient for 3rd party API integration
- ✅ Zod schema validation
- ✅ Error handling middleware
- ✅ Helmet.js security
- ✅ CORS configuration
- ✅ Environment variable validation
- ✅ Jest unit & integration tests
- ✅ Request logging
- ✅ Health check endpoint

## Prerequisites

- Node.js 22+
- npm or yarn

## Installation

```bash
npm install
```

## Environment Setup

```bash
cp .env.example .env
```

## Development

```bash
npm run dev
```

Server runs on `http://localhost:3000`

## Building

```bash
npm run build
npm start
```

## Testing

```bash
npm test
npm run test:watch
npm run test:coverage
```

## Project Structure

```
src/
├── config/           # Configuration files
├── controllers/      # Request handlers
├── middleware/       # Express middleware
├── models/          # Data interfaces
├── repositories/    # 3rd party API integration layer
├── routes/          # Route definitions
├── services/        # Business logic
├── __tests__/       # Test files
└── index.ts         # Application entry point
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

## Architecture

### Request Flow
1. **Controller** - Validates request & calls service
2. **Service** - Business logic & error handling
3. **Repository** - Calls 3rd party API via HttpClient

### Error Handling

All errors are caught by centralized middleware:
- Validation errors → 400
- Not found → 404
- API unavailable → 503
- Server errors → 500

