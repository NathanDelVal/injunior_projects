import express from "express";
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require("./swagger.json");
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use("/users", usersRoutes);

export { app };
