"use client";

import React from "react";

import { Input } from "../ui/input";
import { FilterChecboxProps, FilterCheckbox } from "./filter-checkbox";

type Item = FilterChecboxProps;

interface Props {
  title: string;
  items: Item[];
  defaultItems: Item[];
  limit?: number;
  searchInputPlaceholder?: string;
  className?: string;
  selectedIds?: Set<string>;
  onClickCheckbox?: (value: string) => void;
  loading?: boolean;
  name?: string;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
  items,
  defaultItems,
  limit = 5,
  searchInputPlaceholder = "Поиск...",
  className,
  selectedIds,
  onClickCheckbox,
  loading,
  name,
}) => {
  const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState("");

  const onChangeSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const list = showAll
    ? items.filter((item) =>
        item.text.toLowerCase().includes(searchValue.toLowerCase())
      )
    : defaultItems.slice(0, limit);

  // if (loading) {
  //   return (
  //     <div className={className}>
  //       <p className="font-bold mb-3">{title}</p>

  //       {...Array(limit)
  //         .fill(0)
  //         .map((_, index) => (
  //           <div
  //             key={index}
  //             className="w-full mb-4 h-6 bg-gray-200 rounded-[8px] animate-pulse"
  //           />
  //         ))}

  //       <div className="w-28 h-4 bg-gray-200 rounded-[8px] animate-pulse" />
  //     </div>
  //   );
  // }

  return (
    <div className={className}>
      <p className="font-bold mb-3">{title}</p>

      {showAll && (
        <div className="mb-5">
          <Input
            placeholder={searchInputPlaceholder}
            className="bg-gray-50 border-none"
            onChange={onChangeSearchInput}
          />
        </div>
      )}

      <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar">
        {list.map((item, index) => (
          <FilterCheckbox
            onCheckedChange={(ids) => console.log(ids)}
            checked={false}
            key={index}
            value={item.value}
            text={item.text}
            endAdornment={item.endAdornment}
          />
        ))}
      </div>

      {items.length > limit && (
        <div className={showAll ? "border-t border-t-neutral-100 mt-4" : ""}>
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-primary mt-3"
          >
            {showAll ? "Скрыть" : "+ Показать все"}
          </button>
        </div>
      )}
    </div>
  );
};
