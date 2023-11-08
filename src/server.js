import express from "express";
import productRoute from "./product.routes.js";

const app = express();

app.use(express.json());

app.use("/products", productRoute);

const port = process.env.PORT || 3333

app.listen(port, () => console.log(`Server is running on port http://localhost:${port}/`));
