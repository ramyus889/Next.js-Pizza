"use client";

import { PizzaSize, PizzaType } from "@/shared/constants/pizza";
import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { GroupVariants } from "./group-variants";
import { PizzaImage } from "./pizza-image";
import { Title } from "./title";

interface Props {
  imageUrl: string;
  name: string;
  className?: string;
  ingredients: any[];
  items?: any[];
  onClickAdd?: VoidFunction;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  name,
  items,
  imageUrl,
  ingredients,
  onClickAdd,
  className,
}) => {
  const [size, setSize] = React.useState<PizzaSize>(20);
  const [type, setType] = React.useState<PizzaType>(1);

  const textDetaills = "30 см, традиционное тесто 30";
  const totalPrice = 300;
  const pizzaSizes = 20;

  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex items-center justify-center flex-1 relative w-full">
        <PizzaImage imageUrl={imageUrl} size={size} />
      </div>

      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} size="md" className="font-extrabold mb-1" />
        <p className="text-gray-400 my-5">{textDetaills}</p>

        <GroupVariants items={pizzaSizes} />

        <Button className="h-[55px] px-10 mt-5 text-base rounded-[18px] w-full">
          Добавить в корзину за {totalPrice} ₽
        </Button>
      </div>
    </div>
  );
};
