import { Link } from "react-router-dom";

export const Promo = () => (
  <section className="promo">
    <div className="container">
      <div className="promo__container">
        <h1 className="promo__title">Попробуй новый вкус Арабики</h1>
        <Link className="promo__link" to="/products?category=coffee">Перейти к&nbsp;кофе</Link>
      </div>
    </div>
  </section>
)