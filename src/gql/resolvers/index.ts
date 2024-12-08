import { db } from "../../db.js";

export const resolvers = {
  Query: {
    products: () => db.products,
    product: (parent, args: { productId: string }, context) => {
      const result = db.products.find((pd) => pd.id === args.productId);
      return result;
    },
  },
};
