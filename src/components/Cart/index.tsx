import { useState } from 'react'
import { useCart } from '../../context/CartContext/useCart'
import CardModal from './CardModal'

import './Cart.scss'
import CardModalConfirm from './CardModalConfirm'

export default function Cart() {
  const { cart } = useCart()

  const [isConfirmOrderModal, setIsConfirmOrderModal] = useState(false)

  function openModal() {
    setIsConfirmOrderModal(true)
  }

  function closeModal() {
    setIsConfirmOrderModal(false)
  }

  return (
    <>
      <aside className="cart">
        <h2 className="cart__title">Your Cart ({cart.length})</h2>

        {cart.length === 0 ? (
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
          <CardModal />
        )}

        {cart.length > 0 ? (
          <>
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

            <button className="cart__confirm-button" onClick={openModal}>
              Confirm Order
            </button>
          </>
        ) : null}
      </aside>

      {isConfirmOrderModal && (
        <div className="confirmation-modal">
          <div className="confirmation-modal__container">
            <img
              className="confirmation-modal__icon"
              src="/public/assets/images/icon-order-confirmed.svg"
              alt=""
            />
            <h3 className="confirmation-modal__title">Order Confirmed</h3>
            <span className="confirmation-modal__text">
              We hope you enjoy your food!
            </span>

            <div className="confirmation-modal__card">
              <CardModalConfirm />
            </div>

            <button className="cart__confirm-button" onClick={closeModal}>
              Start New Order
            </button>
          </div>
        </div>
      )}
    </>
  )
}
