import ProductModel from "../database/models/Products.js";

class ProductService {
  constructor() {
    this.model = ProductModel;
  }

  async findAll() {
    try {
      const products = await this.model.find({}).lean();
      return products;
    } catch (e) {
      console.error("findAllProduct", e);
      throw e;
    }
  }

  async findById(id) {
    try {
      const Product = await this.model.find({ ProID: id }).lean();
      if (Product.length === 0) return null;
      return Product[0];
    } catch (e) {
      console.error("findByID", e);
      throw e;
    }
  }

  async findByCatID(id) {
    try {
      const Product = await this.model.find({ CatID: id }).lean();
      return Product;
    } catch (e) {
      console.error("findByID", e);
      throw e;
    }
  }

  async findAllByPage(amount, page) {
    try {
      const Product = await this.model
        .find()
        .limit(amount)
        .skip((page - 1) * amount)
        .lean();
      return Product;
    } catch (e) {
      console.error("findByID", e);
      throw e;
    }
  }

  async countAll() {
    const count = await this.model.countDocuments();
    return count;
  }

  async countByCatID(id) {
    const count = await this.model.countDocuments({ CatID: id });
    return count;
  }

  async add(Product) {
    const newProduct = new ProductModel(Product);
    return await newProduct.save();
  }

  async delete(id) {
    await this.model.deleteOne({ ProID: id });
  }

  async patch(Product) {
    const id = Product.ProID;
    await this.model.updateOne({ ProID: id }, { $set: Product });
  }
}

export default new ProductService();
