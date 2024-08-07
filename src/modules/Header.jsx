import { Link, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useProducts } from "../context/ProductContext";

export const Header = () => {
  const location = useLocation();
  const { cart } = useCart();
  const { categories } = useProducts();

  const totalQuantity = cart
  ? cart.reduce((acc, item) => (
    item.quantity + acc
  ), 0)
  : 0;

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      'category',
    );

    return currentCategory === category ? "active" : "";
  };

  return (
    <header className="header">
      <div className="header__container container">
        <Link className="header__logo-link" to="/">
          <img className="header__logo" src="image/logo.svg" alt="Логотип Cup Time" />
        </Link>
        <nav className="header__nav">
          <ul className="header__menu">
            {Object.entries(categories).map(([key, value]) => (
              <li key={key} className="header__menu-item">
                <Link className={`header__menu-link ${getActiveClass(key)}`} to={`/products?category=${key}`}>{value}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link className="header__cart-link" to="cart">{totalQuantity}</Link>
      </div>
    </header>
  )
}