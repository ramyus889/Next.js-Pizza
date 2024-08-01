"use client";

import React from "react";
import { AddressSuggestions } from "react-dadata";
import "react-dadata/dist/react-dadata.css";

interface Props {
  onChange?: (value?: string) => void;
}

export const AdressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      token="efb9246229479510d3856b77ee1606e952d556fb"
      onChange={(data) => onChange?.(data?.value)}
    />
  );
};
