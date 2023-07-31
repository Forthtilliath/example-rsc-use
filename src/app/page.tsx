"use client";

import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import FoodList from "@/_components/FoodList";
import FoodProvider, { FoodContextType } from "@/_components/FoodProvider";

export default function Home() {
  const foodReq = fetch("http://localhost:3000/api/foods", {
    cache: "no-cache",
  }).then((res) => res.json() as FoodContextType);

  return (
    <ErrorBoundary fallback={<div>Something went wrong</div>}>
      <FoodProvider foodPromise={foodReq}>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <Suspense fallback={<div>Loading...</div>}>
            <FoodList />
          </Suspense>
        </main>
      </FoodProvider>
    </ErrorBoundary>
  );
}
