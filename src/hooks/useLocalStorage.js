import { useEffect, useState } from "react";

// estado persistido no navegador; falha em silêncio se o storage não estiver disponível
export function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : initial;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      /* ignora */
    }
  }, [key, value]);

  return [value, setValue];
}
