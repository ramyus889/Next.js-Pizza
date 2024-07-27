import { useRouter } from "next/navigation";
import qs from "qs";
import React from "react";
import { Filters } from "./use-filter";

export const useQueryFilters = (filters: Filters) => {
  const router = useRouter();
  React.useEffect(() => {
    const params = {
      ...filters.prices,
      ingredients: Array.from(filters.selectedIngredients),
      sizes: Array.from(filters.sizes),
      pizzaTypes: Array.from(filters.pizzaTypes),
    };

    const queryString = qs.stringify(filters, {
      arrayFormat: "comma",
    });

    router.push(`?${queryString}`, {
      scroll: false,
    });
  }, [filters, router]);
};
