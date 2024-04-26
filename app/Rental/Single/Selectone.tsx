import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { prices } from "./data";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select
        label="Select Price"
        placeholder="Select Price"
        className="max-w-xs"
      >
        {prices.map((price) => (
          <SelectItem key={price.value} value={price.value}>
            {price.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
