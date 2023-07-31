"use client";

import { use } from "react";
import { useFoodPromise } from "./FoodProvider";

export default function FoodList() {
  const foods = use(useFoodPromise())
  return <div>Foods: {foods.join(", ")}</div>;
}
