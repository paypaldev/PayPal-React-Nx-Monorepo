import { useState } from 'react';
import styles from './products.module.scss';
import { Product } from '@react-monorepo/product';

export function Products(products: Product[]) {

  return (
    <div className={styles['container']}>
      {products.map((product: Product, index: number) => (
        <div>
          <img src={product.imgUrl} alt={product.name} className="product-image" />
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price}</p>
        </div>
       ))}
    </div>
  );
}

export default Products;
