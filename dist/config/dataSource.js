"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const dotenv_1 = __importDefault(require("dotenv"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const __dirname = path_1.default.resolve();
(0, typeorm_1.createConnection)({
    type: 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USER || 'naeromaro',
    password: process.env.DB_PASSWORD || '1234',
    database: process.env.DB_NAME || 'naeromaro',
    synchronize: true,
    entities: [path_1.default.join(__dirname, 'entity', 'Post.ts'), path_1.default.join(__dirname, 'entity', 'User.ts')],
})
    .then(connection => {
    console.log('Database connected');
})
    .catch(error => {
    console.error('Database connection failed:', error);
});
