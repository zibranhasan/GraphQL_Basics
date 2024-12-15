import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent, args: { productId: string }, context) => {
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
    categories: () => db.categories,
    category: (parent, args: { categoryId: string }, context) => {
      const result = db.categories.find((cd) => cd.id === args.categoryId);
      return result;
    },
  },
  Product: {
    category: (parent, args, context) => {
      const result = db.categories.find(
        (category) => category.id === parent.categoryId
      );
      return result;
    },
  },
  Category: {
    products: (parent, args, context) => {
      const result = db.products.filter(
        (product) => product.categoryId === parent.id
      );
      return result;
    },
  },
};
