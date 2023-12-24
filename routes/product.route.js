import express from "express";
import Product from "../services/product.service.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let list = await Product.findAll();
  res.render("vwProduct/index", { list });
});

router.get("/add", (req, res) => {
  res.render("vwProduct/add");
});

router.post("/add", async (req, res) => {
  await Product.add(req.body);
  res.render("vwProduct/add");
});

router.get("/edit", async (req, res) => {
  const id = req.query.id || 0;
  let product = await Product.findById(id);
  if (product === null) {
    return res.redirect("/admin/products");
  }
  res.render("vwProduct/edit", { product });
});

router.post("/del", async (req, res) => {
  await Product.delete(req.body.ProID);
  res.redirect("/admin/products");
});

router.post("/patch", async (req, res) => {
  await Product.patch(req.body);
  res.redirect("/admin/products");
});

export default router;
