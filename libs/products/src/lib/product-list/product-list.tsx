import { Product } from '@react-monorepo/product';
import styles from './product-list.module.scss';

interface ProductListProps {
  products: Product[];
  cart: boolean
}

export function ProductList({ products, cart }: ProductListProps) {
  return (
    <div className={styles['container']}>
      {products.map((product) => (
        <div key={product.id} className={styles['product-item']}>
          <img src={product.imgUrl} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
          {!cart && <button>Add Button</button>}
        </div>
      ))}
    </div>
  );
};

export default ProductList;