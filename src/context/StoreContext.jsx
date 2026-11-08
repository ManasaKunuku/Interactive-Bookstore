import { createContext, useContext, useEffect, useMemo, useState } from "react";

const StoreContext = createContext(null);
export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try { return JSON.parse(localStorage.getItem("reading-room-cart")) || []; }
    catch { return []; }
  });
  useEffect(() => localStorage.setItem("reading-room-cart", JSON.stringify(cart)), [cart]);

  const addToCart = (book) => setCart(current => {
    const found = current.find(item => item.id === book.id);
    return found ? current.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item)
      : [...current, { ...book, quantity: 1 }];
  });
  const removeFromCart = (id) => setCart(current => current.filter(item => item.id !== id));
  const updateQuantity = (id, quantity) => setCart(current => quantity < 1
    ? current.filter(item => item.id !== id)
    : current.map(item => item.id === id ? { ...item, quantity } : item));
  const clearCart = () => setCart([]);
  const totalItems = useMemo(() => cart.reduce((sum, item) => sum + item.quantity, 0), [cart]);
  const totalPrice = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  return <StoreContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, totalItems, totalPrice }}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);