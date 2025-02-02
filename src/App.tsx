import { useEffect, useMemo, useState } from 'react'

import './App.scss'

import data from './data/data.json'
import Dessert from './components/Dessert'
import Cart from './components/Cart'

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

        <Cart />
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
