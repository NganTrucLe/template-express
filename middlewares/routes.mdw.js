import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import productRoute from "../routes/product.route.js";
import productUserRoute from "../routes/product-user.route.js";

const __dirname = dirname(fileURLToPath(import.meta.url));
export default function (app) {
  app.use("/admin/products", productRoute);
  app.use("/products", productUserRoute);

  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
  });
}
