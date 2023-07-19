import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { join } from "path";
import path from "path";

dotenv.config();
// const fileURL: string = import.meta.url;
// const filePath: string = fileURLToPath(fileURL);
// const dirPath: string = dirname(filePath);
// const dirPath = path.resolve();

const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "naromaro",
  synchronize: true,
  //entities: [join(__dirname, "../entity/Post"), "./entity/User"],
  entities: ["../entity/Post", "./entity/User"],

  //entities: [dirPath + "/../entity/Post.js", dirPath + "/../entity/User.js"],
});

export default dataSource;
