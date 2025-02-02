import { useCart } from '../../context/CartContext/useCart'

export default function Cart() {
  const { cart } = useCart()

  const totalAmount = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <aside className="cart">
      <h2 className="cart__title">Your Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <div className="cart__empty-message">
          <img
            className="cart__empty-image"
            src="/assets/images/illustration-empty-cart.svg"
            alt="Empty Cart"
          />
          <p className="cart__empty-text">Your added items will appear here</p>
        </div>
      ) : (
        <div className="cart__items">
          <ul className="cart__list">
            {cart.map((item) => (
              <li key={item.name} className="cart__item">
                <div className="cart__item-details">
                  <span className="cart__item-type">{item.name}</span>
                  <div className="cart__item-info">
                    <span className="cart__item-quantity">
                      {item.quantity}x
                    </span>
                    <span className="cart__item-unit-price">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="cart__item-total-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <img
                  className="cart__item-close"
                  src="/assets/images/icon-remove-item.svg"
                  alt="icon remove item"
                />
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="cart__order-total">
        <span className="cart__order-total-label">Order Total</span>
        <span className="cart__order-total-amount">${totalAmount}</span>
      </div>

      <div className="cart__carbon-neutral">
        <img
          className="cart__carbon-neutral-image"
          src="/assets/images/icon-carbon-neutral.svg"
          alt=""
        />
        <p className="cart__carbon-neutral-text">
          This is a <span>carbon-neutral</span> delivery
        </p>
      </div>

      <button className="cart__confirm-button">Confirm Order</button>
    </aside>
  )
}
