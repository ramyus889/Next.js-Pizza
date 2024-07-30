"use client";

import { ProductWithRelations } from "@/@types/prisma";
import { useCartStore } from "@/shared/store/cart";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { Dialog, DialogContent } from "../../../components/ui/dialog";
import { ChoosePizzaForm } from "../choose-pizza-form";
import { ChooseProductForm } from "../choose-product-form";

interface Props {
  product: ProductWithRelations;
}

export const ChooseProductModal: React.FC<Props> = ({ product }) => {
  const router = useRouter();
  const firstItem = product.items[0];
  const isPizzaForm = Boolean(firstItem.pizzaType);
  const [addCartItem, loading] = useCartStore((state) => [
    state.addCartItem,
    state.loading,
  ]);

  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const itemId = productItemId ?? firstItem.id;

      await addCartItem({
        productItemId: itemId,
        ingredients,
      });
      toast.success(product.name + " добавлен в корзину");
      router.back();
    } catch (err) {
      toast.error("Не удалось добавить товар в корзину");
      console.error(err);
    }
  };

  return (
    <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
      <DialogContent className="p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden">
        {isPizzaForm ? (
          <ChoosePizzaForm
            imageUrl={product.imageUrl}
            name={product.name}
            items={product.items}
            ingredients={product.ingredients}
            onSubmit={onSubmit}
            loading={loading}
          />
        ) : (
          <ChooseProductForm
            imageUrl={product.imageUrl}
            name={product.name}
            onSubmit={onSubmit}
            price={firstItem.price}
            loading={loading}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
