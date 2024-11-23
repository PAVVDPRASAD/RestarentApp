import {HiOutlineShoppingCart} from 'react-icons/hi'

import './index.css'

const Navbar = props => {
  const {cartItems} = props
  const totalCartCount = cartItems.reduce(
    (acc, item) => acc + (item.quantity || 0),
    0,
  )
  return (
    <nav>
      <h1 className="company-heading">UNI Resto Cafe</h1>
      <div className="cart-container">
        <p className="myOrders-laabel">My Orders</p>
        <div className="cart-icon-cont">
          <HiOutlineShoppingCart className="cart-logo" />
          <p className="cart-count">{totalCartCount}</p>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
