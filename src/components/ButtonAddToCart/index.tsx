import { useState } from 'react'

import { ButtonIncrementDecrement } from '../ButtonIncrementDecrement'

import './ButtonAddToCart.scss'

export function ButtonAddToCart() {
  const [quantityDessert, setQuantityDessert] = useState(0)
  const addCard = quantityDessert > 0

  function handleAddCart() {
    setQuantityDessert((prev) => prev + 1)
  }

  return (
    <>
      {addCard ? (
        <button className={`button-cart ${addCard ? 'bg-red' : ''}`}>
          <ButtonIncrementDecrement
            variant="decrement"
            onClick={() => setQuantityDessert((prev) => Math.max(prev - 1, 0))}
          />

          <span>{quantityDessert}</span>

          <ButtonIncrementDecrement
            variant="increment"
            onClick={() => setQuantityDessert(quantityDessert + 1)}
          />
        </button>
      ) : (
        <button
          className="button-cart"
          onClick={() => !addCard && handleAddCart()}
        >
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
