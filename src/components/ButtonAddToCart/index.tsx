import { ButtonIncrementDecrement } from '../ButtonIncrementDecrement'

import { useCart } from '../../context/CartContext/useCart'

import { IDessert } from '../../App'

import './ButtonAddToCart.scss'

interface ButtonAddToCartProps {
  item: IDessert
}

export function ButtonAddToCart({ item }: ButtonAddToCartProps) {
  const { cart, addToCart, updateQuantity } = useCart()

  const cartItem = cart.find((cartItem) => cartItem.name === item.name)
  const quantity = cartItem ? cartItem.quantity : 0

  function handleAddCart() {
    addToCart(item)
  }

  return (
    <>
      {quantity > 0 ? (
        <button className={`button-cart ${quantity > 0 ? 'bg-red' : ''}`}>
          <ButtonIncrementDecrement
            variant="decrement"
            onClick={() => {
              updateQuantity(item.name, -1)
            }}
          />

          <span>{quantity}</span>

          <ButtonIncrementDecrement
            variant="increment"
            onClick={() => {
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
