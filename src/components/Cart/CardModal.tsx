import { useCart } from '../../context/CartContext/useCart'
import ButtonRemoveItem from '../ButtonRemoveItem'

export default function CardModal() {
  const { cart, removeToCart } = useCart()

  const totalAmount = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className="cart__items">
      <ul className="cart__list">
        {cart.map((item) => (
          <li key={item.name} className="cart__item">
            <div className="cart__item-details">
              <span className="cart__item-type">{item.name}</span>
              <div className="cart__item-info">
                <span className="cart__item-quantity">{item.quantity}x</span>
                <span className="cart__item-unit-price">
                  @ ${item.price.toFixed(2)}
                </span>
                <span className="cart__item-total-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>

            <button
              className="cart__item-close"
              onClick={() => removeToCart(item.name)}
            >
              <ButtonRemoveItem />
            </button>
          </li>
        ))}
      </ul>

      <div className="cart__order-total">
        <span className="cart__order-total-label">Order Total</span>
        <span className="cart__order-total-amount">${totalAmount}</span>
      </div>
    </div>
  )
}
