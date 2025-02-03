import { useCart } from '../../context/CartContext/useCart'

export default function CardModalConfirm() {
  const { cart } = useCart()

  const totalAmount = cart
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2)

  return (
    <div className="cart__items">
      <ul className="cart__list">
        {cart.map((item) => (
          <li key={item.name} className="cart__item">
            <div>
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={item.image.desktop}
                />
                <source media="(min-width: 768px)" srcSet={item.image.tablet} />
                <img
                  className="cart__item-image"
                  src={item.image.mobile}
                  alt={item.name}
                />
              </picture>

              <div className="cart__item-details">
                <span className="cart__item-type">{item.name}</span>
                <div className="cart__item-info">
                  <span className="cart__item-quantity">{item.quantity}x</span>
                  <span className="cart__item-unit-price">
                    @ ${item.price.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            <div>
              <span className="cart__item-total-price">
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
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
