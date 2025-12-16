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

# Weather Forecast Service

A Node.js + TypeScript + Express backend that integrates with third‑party weather APIs. This README documents running, testing, and verifying the app for assignment submission.

**Features**

- TypeScript (strict)
- Controller-Service-Repository pattern
- Zod validation
- Centralized error middleware
- Helmet + CORS
- Jest unit & integration tests
- Request logging and health check endpoint

**Prerequisites**

- Node.js 22+
- npm (or yarn)

**Quick Install**

```bash
npm install
```

**Environment**

Copy example env: `cp .env.example .env`

**Run (Development)**

```bash
npm run dev
```

Server listens on `http://localhost:3000` by default.

**Build & Run (Production)**

```bash
npm run build
npm start
```

**Testing**

- Run all tests: `npm test`
- Watch mode: `npm run test:watch`
- Coverage: `npm run test:coverage` (output in `coverage/`)

Test Case Status (latest run: 2025-12-15)

- Total tests: 11
- Passed: 11
- Failed: 0

Include this status in submission materials to demonstrate test health.

**How I verified the app (use these steps locally)**

1. Install and set `.env` values.
2. Start dev server: `npm run dev`.
3. Check health endpoint
4. Import `open_api.json` into Postman or Insomnia to exercise API endpoints or access http://localhost:3000/api-docs/
5. Run tests with coverage

```bash
npm run test:coverage
# then open coverage/lcov-report/index.html in a browser
```

Test Results:

--------------|---------|----------|---------|---------|-------------------
File | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
--------------|---------|----------|---------|---------|-------------------
All files | 85.29 | 44.44 | 75 | 86.73 |  
 src | 85.71 | 20 | 66.66 | 85.71 |  
 app.ts | 85.71 | 20 | 66.66 | 85.71 | 41,49,53-59,71  
 src/config | 100 | 100 | 100 | 100 |  
 swagger.ts | 100 | 100 | 100 | 100 |  
 ...ntrollers | 100 | 100 | 100 | 100 |  
 ...oller.ts | 100 | 100 | 100 | 100 |  
 ...iddleware | 100 | 100 | 100 | 100 |  
 ...ogger.ts | 100 | 100 | 100 | 100 |  
 src/models | 100 | 100 | 100 | 100 |  
 Forecast.ts | 100 | 100 | 100 | 100 |  
 src/routes | 100 | 100 | 100 | 100 |  
 api.ts | 100 | 100 | 100 | 100 |  
 src/services | 70.58 | 50 | 60 | 74.19 |  
 ...rvice.ts | 70.58 | 50 | 60 | 74.19 | 33-35,42,48,59-62
src/utils | 100 | 100 | 100 | 100 |  
 ApiError.ts | 100 | 100 | 100 | 100 |  
--------------|---------|----------|---------|---------|-------------------

Test Suites: 6 passed, 6 total
Tests: 11 passed, 11 total
Snapshots: 0 total
Time: 8.757 s
Ran all test suites.

**Verify a request flow (example)**

- Hit the health check as above.
- Run an integration test locally with Jest for the controller/service you want to demo:

```bash
npm test -- src/__tests__/ForecastController.test.ts
```

**Project Layout (high level)**

```
src/
├─ config/        # app + swagger config
├─ controllers/   # request handlers
├─ middleware/    # express middleware (logging, error handling)
├─ models/        # TypeScript interfaces / Zod schemas
├─ routes/        # route registration
├─ services/      # business logic
└─ __tests__/     # Jest tests
```
