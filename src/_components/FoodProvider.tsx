"use client";

import { PropsWithChildren, createContext, useContext } from "react";

export type FoodContextType = Promise<string[]>;
type ProviderProps = PropsWithChildren<{
  foodPromise: FoodContextType;
}>;

const FoodContext = createContext<FoodContextType | null>(null);

export const useFoodPromise = () => {
  const food = useContext(FoodContext);
  if (!food) {
    throw new Error("useFood must be used within a FoodProvider");
  }

  return food;
};

const FoodProvider = ({ children, foodPromise }: ProviderProps) => {
  return (
    <FoodContext.Provider value={foodPromise}>{children}</FoodContext.Provider>
  );
};

export default FoodProvider;
