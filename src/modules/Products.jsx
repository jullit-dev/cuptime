import { products } from "../products";
import { Product } from "./Product";

export const Products = () => (
  <section className="products">
    <div className="container">
      <h1 className="products__title">Чай</h1>
      <ul className="products__list">
        {products.map((item) => (<Product key={item.id} data={item}/>))}
      </ul>
    </div>
  </section>
)