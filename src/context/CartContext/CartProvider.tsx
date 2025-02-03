import { ReactNode, useState } from 'react'
import { IDessert } from '../../App'
import { CartContext } from './CartContext'

export interface CartItem extends IDessert {
  quantity: number
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  // Calcula a quantidade total diretamente a partir do cart
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0)

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

  function removeToCart(name: string) {
    setCart((prev) => prev.filter((cartItem) => cartItem.name !== name))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        updateQuantity,
        removeToCart,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
