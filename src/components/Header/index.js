import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="first-section">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
        alt="nav logout"
        className="logOut"
      />
    </div>
    <nav className="second-section">
      <li>
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
          alt="nav home"
          className="icon"
        /> */}
        Home
      </li>
      <li>
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
          alt="nav products"
          className="icon"
        /> */}
        Products
      </li>
      <li>
        {/* <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
          alt="nav cart"
          className="icon"
        /> */}
        Cart
      </li>
    </nav>
  </div>
)

export default Header
