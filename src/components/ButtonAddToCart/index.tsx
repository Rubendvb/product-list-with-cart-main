import { useState } from 'react'

import { ButtonIncrementDecrement } from '../ButtonIncrementDecrement'

import { useCart } from '../../context/CartContext/useCart'

import { IDessert } from '../../App'

import './ButtonAddToCart.scss'

interface ButtonAddToCartProps {
  item: IDessert
}

export function ButtonAddToCart({ item }: ButtonAddToCartProps) {
  const { addToCart, updateQuantity } = useCart()
  const [quantityDessert, setQuantityDessert] = useState(0)

  function handleAddCart() {
    setQuantityDessert((prev) => prev + 1)
    addToCart(item)
  }

  return (
    <>
      {quantityDessert > 0 ? (
        <button
          className={`button-cart ${quantityDessert > 0 ? 'bg-red' : ''}`}
        >
          <ButtonIncrementDecrement
            variant="decrement"
            onClick={() => {
              setQuantityDessert((prev) => Math.max(prev - 1, 0))
              updateQuantity(item.name, -1)
            }}
          />

          <span>{quantityDessert}</span>

          <ButtonIncrementDecrement
            variant="increment"
            onClick={() => {
              setQuantityDessert(quantityDessert + 1)
              updateQuantity(item.name, 1)
            }}
          />
        </button>
      ) : (
        <button className="button-cart" onClick={() => handleAddCart()}>
          <img
            className="icon-cart"
            src="/assets/images/icon-add-to-cart.svg"
            alt="add to cart"
          />
          <span>Add to Cart</span>
        </button>
      )}
    </>
  )
}
