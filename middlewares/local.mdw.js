// import Category from "../services/category.service.js";

export default function (app) {
  app.use(async function (req, res, next) {
    // res.locals.lcCategories = await Category.findAllByDetails();
    next();
  });
}
