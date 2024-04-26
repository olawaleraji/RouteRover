import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { vehicleBrands } from "./datas";

export default function App() {
  return (
    <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
      <Select label="Select Brand" className="max-w-xs">
        {vehicleBrands.map((price) => (
          <SelectItem key={price.value} value={price.value}>
            {price.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
