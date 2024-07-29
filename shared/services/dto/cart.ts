import {
  Cart,
  CartItem,
  Ingredient,
  Product,
  ProductItem,
} from "@prisma/client";

export type CartItemDTO = CartItem & {
  productItem: ProductItem & { product: Product };
  ingredients: Ingredient[];
};

export type CartDTO = Cart & {
  items: CartItemDTO[];
};

export interface CreateCartItemValues {
  productItemId: number;
  ingredientsIds?: number[];
}
