import { Product } from "../model/Product.js";

class ProductsRepository {
  constructor() {
    this.products = [];
  }

  // create
  create({ name, description, quantity, price }) {
    const product = new Product();

    Object.assign(product, {
      name,
      description,
      quantity,
      price,
      created_at: new Date(),
    });

    this.products.push(product);
  }
  // delete
  delete({ id }) {
    const productIndex = this.products.findIndex(
      (product) => product.id === id
    );

    this.products.splice(productIndex, 1);
  }
  // updateQauntity
  updateQauntity({ id, quantity }) {
    const product = this.products.find((product) => product.id === id);

    product.quantity = parseInt(quantity);
    product.updated_at = new Date();

    const productIndex = this.products.findIndex(
      (productIndex) => product.id === id
    );

    Object.assign(this.products[productIndex], product);

    return product;
  }

  // findByName
  findByName({ name }) {
    const product = this.products.find((product) => product.name === name);
    return product;
  }

  // findById
  findById({ id }) {
    const product = this.products.find((product) => product.id === id);
    return product;
  }

  // list
  list() {
    return this.products;
  }
}

export { ProductsRepository };
