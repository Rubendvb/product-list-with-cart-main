import { ButtonAddToCart } from '../ButtonAddToCart'

import { IDessert } from '../../App'

import './Dessert.scss'

interface DessertProps {
  item: IDessert
}

export default function Dessert({ item }: DessertProps) {
  return (
    <article className="dessert">
      <div className="dessert__image-container">
        <picture>
          <source media="(min-width: 1024px)" srcSet={item.image.desktop} />
          <source media="(min-width: 768px)" srcSet={item.image.tablet} />
          <img
            className="dessert__image"
            src={item.image.mobile}
            alt={item.name}
          />
        </picture>

        <div className="container__button">
          <ButtonAddToCart item={item} />
        </div>
      </div>

      <div className="dessert__details">
        <span className="dessert__type">{item.category}</span>
        <h3 className="dessert__name">{item.name}</h3>
        <span className="dessert__price">${item.price.toFixed(2)}</span>
      </div>
    </article>
  )
}
