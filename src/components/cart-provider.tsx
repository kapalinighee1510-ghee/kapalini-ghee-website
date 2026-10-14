"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { PRODUCT } from "@/data/site";

type CartLine = { variantId: string; quantity: number };
type CartContextValue = {
  lines: CartLine[];
  count: number;
  subtotalInPaise: number;
  isOpen: boolean;
  open: () => void;
  close: () => void;
  add: (variantId: string, quantity: number) => void;
  update: (variantId: string, quantity: number) => void;
  remove: (variantId: string) => void;
};

const STORAGE_KEY = "kapalini-preview-cart-v1";
const CartContext = createContext<CartContextValue | null>(null);

function validateStoredLines(value: unknown): CartLine[] {
  if (!Array.isArray(value)) return [];
  return value.flatMap((line) => {
    if (!line || typeof line !== "object") return [];
    const { variantId, quantity } = line as Record<string, unknown>;
    if (
      typeof variantId !== "string" ||
      !PRODUCT.variants.some((variant) => variant.id === variantId) ||
      typeof quantity !== "number" ||
      !Number.isInteger(quantity) ||
      quantity < 1 ||
      quantity > 99
    ) return [];
    return [{ variantId, quantity }];
  });
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      setLines(validateStoredLines(JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]")));
    } catch {
      setLines([]);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    } catch {
      // The preview cart still works for this session when storage is unavailable.
    }
  }, [lines, hydrated]);

  const add = useCallback((variantId: string, quantity: number) => {
    if (!PRODUCT.variants.some((variant) => variant.id === variantId)) return;
    const safeQuantity = Math.max(1, Math.min(99, Math.trunc(quantity)));
    setLines((current) => {
      const existing = current.find((line) => line.variantId === variantId);
      return existing
        ? current.map((line) => line.variantId === variantId ? { ...line, quantity: Math.min(99, line.quantity + safeQuantity) } : line)
        : [...current, { variantId, quantity: safeQuantity }];
    });
    setOpen(true);
  }, []);

  const update = useCallback((variantId: string, quantity: number) => {
    setLines((current) => current.map((line) =>
      line.variantId === variantId ? { ...line, quantity: Math.max(1, Math.min(99, Math.trunc(quantity))) } : line
    ));
  }, []);

  const remove = useCallback((variantId: string) => {
    setLines((current) => current.filter((line) => line.variantId !== variantId));
  }, []);
  const open = useCallback(() => setOpen(true), []);
  const close = useCallback(() => setOpen(false), []);

  const count = lines.reduce((total, line) => total + line.quantity, 0);
  const subtotalInPaise = lines.reduce((total, line) => {
    const variant = PRODUCT.variants.find((item) => item.id === line.variantId);
    return total + (variant?.priceInPaise ?? 0) * line.quantity;
  }, 0);

  const value = useMemo(() => ({
    lines, count, subtotalInPaise, isOpen,
    open, close,
    add, update, remove,
  }), [lines, count, subtotalInPaise, isOpen, open, close, add, update, remove]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export function formatRupees(paise: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(paise / 100);
}
