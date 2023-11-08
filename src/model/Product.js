import { v4 as uuidv4 } from "uuid";

class Product {
  id;
  name;
  description;
  quantity;
  price;
  created_at;
  updated_at;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Product };
