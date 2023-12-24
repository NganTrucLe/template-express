import express from "express";
import Product from "../services/product.service.js";

const router = express.Router();

router.get("/all", async (req, res) => {
  const pageId = req.query.page || 1;

  const limit = 6;
  let numPage = [];
  const total = await Product.countAll();
  let list = await Product.findAllByPage(limit, pageId);

  for (let i = 1; i <= (total - 1) / limit + 1; i++) numPage.push({ value: i });

  res.render("vwProduct/all", {
    products: list,
    empty: list.length === 0,
    numPage,
  });
});

router.get("/detail/:id", async (req, res) => {
  const ProID = req.params.id;
  const product = await Product.findById(ProID);
  if (ProID) res.render("vwProduct/detail", { product });
  else res.redirect("/products");
});

export default router;
