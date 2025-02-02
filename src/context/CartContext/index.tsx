import { createContext, ReactNode, useContext, useState } from 'react'
import { IDessert } from '../../App'

interface CartItem extends IDessert {
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: IDessert) => void
  updateQuantity: (name: string, amount: number) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addToCart(item: IDessert) {
    setCart((prev) => {
      const existingItem = prev.find((cartItem) => cartItem.name === item.name)

      if (existingItem) {
        return prev.map((cardItem) =>
          cardItem.name === item.name
            ? { ...cardItem, quantity: cardItem.quantity + 1 }
            : cardItem
        )
      }

      return [...prev, { ...item, quantity: 1 }]
    })
  }

  function updateQuantity(name: string, amount: number) {
    setCart((prev) =>
      prev
        .map((cartItem) =>
          cartItem.name === name
            ? { ...cartItem, quantity: Math.max(cartItem.quantity + amount, 0) }
            : cartItem
        )
        .filter((cardItem) => cardItem.quantity > 0)
    )
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return context
}
