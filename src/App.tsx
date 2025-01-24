import { useState } from 'react'
import './App.scss'

import { ButtonAddToCart } from './components/ButtonAddToCart'

function App() {
  const [items, setItems] = useState(1)

  return (
    <>
      <div className="page">
        <main className="main">
          <h1 className="main__title">Desserts</h1>

          <div className="desserts">
            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-waffle-desktop.jpg"
                  alt="Waffle"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>

              <div className="dessert__details">
                <span className="dessert__type">Waffle</span>
                <h3 className="dessert__name">Waffle with Berries</h3>
                <span className="dessert__price">$6.50</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Crème Brûlée"
                />
                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Crème Brûlée</span>
                <h3 className="dessert__name">Vanilla Bean Crème Brûlée</h3>
                <span className="dessert__price">$7.00</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Macaron"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Macaron</span>
                <h3 className="dessert__name">Macaron Mix of Five</h3>
                <span className="dessert__price">$8.00</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Tiramisu"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Tiramisu</span>
                <h3 className="dessert__name">Classic Tiramisu</h3>
                <span className="dessert__price">$5.50</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Baklava"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Baklava</span>
                <h3 className="dessert__name">Pistachio Baklava</h3>
                <span className="dessert__price">$4.00</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__type-label">Lemon</div>
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Lemon Pie"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Pie</span>
                <h3 className="dessert__name">Meringue Pie</h3>
                <span className="dessert__price">$5.00</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__type-label">Red</div>
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Red Velvet Cake"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Cake</span>
                <h3 className="dessert__name">Velvet Cake</h3>
                <span className="dessert__price">$4.50</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Brownie"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Brownie</span>
                <h3 className="dessert__name">Salted Caramel Brownie</h3>
                <span className="dessert__price">$4.50</span>
              </div>
            </article>

            <article className="dessert">
              <div className="dessert__image-container">
                <img
                  className="dessert__image"
                  src="/public/assets/images/image-creme-brulee-desktop.jpg"
                  alt="Panna Cotta"
                />

                <div className="container__button">
                  <ButtonAddToCart />
                </div>
              </div>
              <div className="dessert__details">
                <span className="dessert__type">Panna Cotta</span>
                <h3 className="dessert__name">Vanilla Panna Cotta</h3>
                <span className="dessert__price">$6.50</span>
              </div>
            </article>
          </div>
        </main>

        <aside className="cart">
          <h2 className="cart__title">Your Cart ({items})</h2>

          {items === 0 ? (
            <div className="cart__empty-message">
              <img
                className="cart__empty-image"
                src="/public/assets/images/illustration-empty-cart.svg"
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
                    <span className="cart__item-type">Classic</span>
                    <div className="cart__item-info">
                      <span className="cart__item-quantity">1x</span>
                      <span className="cart__item-unit-price">@ $5.50</span>
                      <span className="cart__item-total-price">$5.50</span>
                    </div>
                  </div>
                  <div className="cart__item-image">
                    <img
                      className="cart__item-image-element"
                      src=""
                      alt="Classic Item"
                    />
                  </div>
                </li>

                <li className="cart__item">
                  <div className="cart__item-details">
                    <span className="cart__item-type">Vanilla</span>
                    <div className="cart__item-info">
                      <span className="cart__item-quantity">4x</span>
                      <span className="cart__item-unit-price">@ $7.00</span>
                      <span className="cart__item-total-price">$28.00</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          )}
        </aside>
      </div>

      <footer>
        Challenge by{' '}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </footer>
    </>
  )
}

export default App
