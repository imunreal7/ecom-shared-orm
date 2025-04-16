# Shared ORM Library

This package contains TypeORM entities and database configuration shared between the backend and other modules.

## 📋 Prerequisites

- Node.js (v18+)
- MySQL

## 🔧 Setup

```bash
npm install
```

## 🛠️ Migrations

1. Create a database in MySQL (e.g., `MyStore`).
2. Run migrations:

```bash
npx typeorm migration:run -d ormconfig.ts
```

## 📁 Structure

- `src/entities/`: TypeORM entity files.
- `src/migrations/`: Database migration files.

## 🔄 Build

```bash
npm run build
```
