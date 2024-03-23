import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })
      return (
        <>
          <div className="cart-summary-container">
            <h1 className="rupees">
              <span className="rupees-text">Order Total: </span>
              Rs {total} /-
            </h1>
            <p className="cart-list-count">{cartList.length} Items in cart</p>
            <button className="checkout-btn" type="button">
              Checkout
            </button>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
