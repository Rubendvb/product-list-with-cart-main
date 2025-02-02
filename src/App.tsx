import { useEffect, useMemo, useState } from 'react'

import './App.scss'

import data from './data/data.json'
import Dessert from './components/Dessert'

export type IDessert = {
  image: {
    thumbnail: string
    mobile: string
    tablet: string
    desktop: string
  }
  name: string
  category: string
  price: number
}

type IDesserts = IDessert[]

function App() {
  const [items, setItems] = useState<IDesserts>([])
  const [itemsCart, setItemsCart] = useState([])

  useEffect(() => {
    setItems(data)
  }, [])

  const renderedItems = useMemo(
    () => items.map((item, index) => <Dessert key={index} item={item} />),
    [items]
  )

  return (
    <>
      <div className="page">
        <main className="main">
          <h1 className="main__title">Desserts</h1>

          <div className="desserts">{renderedItems}</div>
        </main>

        <aside className="cart">
          <h2 className="cart__title">Your Cart ({itemsCart.length})</h2>

          {itemsCart.length === 0 ? (
            <div className="cart__empty-message">
              <img
                className="cart__empty-image"
                src="/assets/images/illustration-empty-cart.svg"
                alt="Empty Cart"
              />
              <p className="cart__empty-text">
                Your added items will appear here
              </p>
            </div>
          ) : (
            <div className="cart__items">
              <ul className="cart__list">
                <li className="cart__item">
                  <div className="cart__item-details">
                    <span className="cart__item-type">Classic Tiramisu</span>
                    <div className="cart__item-info">
                      <span className="cart__item-quantity">1x</span>
                      <span className="cart__item-unit-price">@ $5.50</span>
                      <span className="cart__item-total-price">$5.50</span>
                    </div>
                  </div>
                  <img
                    className="cart__item-close"
                    src="/assets/images/icon-remove-item.svg"
                    alt="icon remove item"
                  />
                </li>

                <li className="cart__item">
                  <div className="cart__item-details">
                    <span className="cart__item-type">
                      Vanilla Bean Crème Brûlée
                    </span>
                    <div className="cart__item-info">
                      <span className="cart__item-quantity">4x</span>
                      <span className="cart__item-unit-price">@ $7.00</span>
                      <span className="cart__item-total-price">$28.00</span>
                    </div>
                  </div>
                  <img
                    className="cart__item-close"
                    src="/assets/images/icon-remove-item.svg"
                    alt="icon remove item"
                  />
                </li>

                <li className="cart__item">
                  <div className="cart__item-details">
                    <span className="cart__item-type">Vanilla Panna Cotta</span>
                    <div className="cart__item-info">
                      <span className="cart__item-quantity">2x</span>
                      <span className="cart__item-unit-price">@ $6.50</span>
                      <span className="cart__item-total-price">$13.00</span>
                    </div>
                  </div>
                  <img
                    className="cart__item-close"
                    src="/assets/images/icon-remove-item.svg"
                    alt="icon remove item"
                  />
                </li>
              </ul>
            </div>
          )}

          <div className="cart__order-total">
            <span className="cart__order-total-label">Order Total</span>
            <span className="cart__order-total-amount">$46.50</span>
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
      </div>

      <footer className="footer">
        Challenge by{' '}
        <a
          className="footer__link"
          href="https://www.frontendmentor.io?ref=challenge"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a className="footer__link" href="#">
          Rubén
        </a>
        .
      </footer>
    </>
  )
}

export default App
