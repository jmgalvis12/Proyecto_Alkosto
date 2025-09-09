// src/context/CartContext.js
import React, { createContext, useContext, useState } from 'react';

// Crear el contexto del carrito
const CartContext = createContext();

// Hook personalizado para usar el contexto del carrito
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart debe ser usado dentro de un CartProvider');
  }
  return context;
};

// Proveedor del contexto del carrito
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  // Función para agregar producto al carrito
  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        // Si el producto ya existe, incrementar la cantidad
        const updatedItems = prevItems.map(item =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        updateCartCount(updatedItems);
        return updatedItems;
      } else {
        // Si es un producto nuevo, agregarlo con cantidad 1
        const newItems = [...prevItems, { ...product, quantity: 1 }];
        updateCartCount(newItems);
        return newItems;
      }
    });
  };

  // Función para remover producto del carrito
  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      const updatedItems = prevItems.filter(item => item.id !== productId);
      updateCartCount(updatedItems);
      return updatedItems;
    });
  };

  // Función para actualizar la cantidad de un producto
  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCartItems(prevItems => {
      const updatedItems = prevItems.map(item =>
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      );
      updateCartCount(updatedItems);
      return updatedItems;
    });
  };

  // Función para limpiar el carrito
  const clearCart = () => {
    setCartItems([]);
    setCartItemCount(0);
  };

  // Función para actualizar el contador total
  const updateCartCount = (items) => {
    const totalCount = items.reduce((total, item) => total + item.quantity, 0);
    setCartItemCount(totalCount);
  };

  // Calcular total del carrito
  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const value = {
    cartItems,
    cartItemCount,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};
