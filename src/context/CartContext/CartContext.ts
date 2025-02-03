import { createContext, Dispatch, SetStateAction } from 'react'
import { CartItem } from './CartProvider'
import { IDessert } from '../../App'

interface CartContextType {
  cart: CartItem[]
  addToCart: (item: IDessert) => void
  updateQuantity: (name: string, amount: number) => void
  removeToCart: (name: string) => void
  quantityDessert: number
  setQuantityDessert: Dispatch<SetStateAction<number>>
}

export const CartContext = createContext<CartContextType | undefined>(undefined)
