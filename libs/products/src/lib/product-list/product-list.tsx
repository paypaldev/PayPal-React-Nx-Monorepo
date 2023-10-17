import { Product } from '@react-monorepo/product';
import styles from './product-list.module.scss';

interface ProductListProps {
  products: Product[];
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={styles['container']}>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <img src={product.imgUrl} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <p className="product-price">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;