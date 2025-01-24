import { useState } from 'react'

import { ButtonIncrementDecrement } from '../ButtonIncrementDecrement'

import './ButtonAddToCart.scss'

export function ButtonAddToCart() {
  const [addCard, setAddCard] = useState(false)

  return (
    <button className={`button-cart ${addCard ? 'bg-red' : ''}`}>
      {addCard ? (
        <>
          <ButtonIncrementDecrement type="decrement" />

          <span>1</span>

          <ButtonIncrementDecrement type="increment" />
        </>
      ) : (
        <>
          <img
            className="icon-cart"
            src="/assets/images/icon-add-to-cart.svg"
            alt="add to cart"
          />
          <span>Add to Cart</span>
        </>
      )}
    </button>
  )
}
