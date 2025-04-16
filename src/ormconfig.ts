import { DataSource } from "typeorm";
import { Product } from "./entities/product.entity";
import { Category } from "./entities/category.entity";
import * as dotenv from "dotenv";
dotenv.config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [Product, Category],
    migrations: ["./src/migrations/*.ts"],
    synchronize: false,
    migrationsRun: true,
});

