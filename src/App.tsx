import './App.css'

function App() {
  return (
    <>
      <div>
        <main>
          <h1>Desserts</h1>

          <div>
            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Waffle</span>
                <h3>Waffle with Berries</h3>
                <span>6.50</span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Crème Brûlée</span>
                <h3>Vanilla Bean Crème Brûlée</h3>
                <span>7.00</span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Macaron</span>
                <h3>Macaron Mix of Five</h3>
                <span>8.00</span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Tiramisu</span>
                <h3>Classic Tiramisu</h3>
                <span>5.50</span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Baklava</span>
                <h3>Pistachio Baklava</h3>
                <span>4.00</span>
              </div>
            </article>

            <article>
              Lemon
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Pie</span>
                <h3>Meringue Pie</h3>
                <span>5.00</span>
              </div>
            </article>

            <article>
              Red
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Cake</span>
                <h3>Velvet Cake</h3>
                <span>4.50</span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Brownie</span>
                <h3>Salted Caramel Brownie</h3>
                <span>4.50</span>
              </div>
            </article>

            <article>
              <div>
                <img src="" alt="" />
                <button>Add to Cart</button>
              </div>
              <div>
                <span>Panna Cotta</span>
                <h3>Vanilla Panna Cotta</h3>
                <span>6.50</span>
              </div>
            </article>
          </div>
        </main>

        <aside>
          <h2>Your Cart {/* Quantity -->) */}</h2>

          <div>
            <img src="" alt="" />
            <p>Your added items will appear here</p>
          </div>

          <div>
            <ul>
              <li>
                <div>
                  <span>Classic</span>
                  <div>
                    <span>1x</span>
                    <span>@ $5.50</span>
                    <span>$5.50</span>
                  </div>
                </div>
                <div>
                  <img src="" alt="" />
                </div>
              </li>

              <li>
                <div>
                  <span>Vanilla</span>
                  <div>
                    <span>4x</span>
                    <span>@ $7.00</span>
                    <span>$28.00</span>
                  </div>
                </div>
                <div>
                  <img src="" alt="Vanilla Item" />
                </div>
              </li>
            </ul>
          </div>
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
