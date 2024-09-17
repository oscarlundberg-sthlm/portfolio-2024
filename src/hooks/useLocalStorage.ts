"use client";

import { isClient } from "@/helpers/isClient";
import { useEffect, useState } from "react";

export function useLocalStorage(key: string, initialValue: string) {
  // Get the initial value from localStorage if available, otherwise use the initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = isClient() ? localStorage?.getItem(key) : null;
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  // Update localStorage whenever the value changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(error);
    }
  }, [key, storedValue]);

  return [storedValue, setStoredValue];
}
