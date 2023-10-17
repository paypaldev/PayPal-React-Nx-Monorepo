import styles from './total.module.scss';
import { Product } from '@react-monorepo/product';
/* eslint-disable-next-line */

export interface TotalProps {
  cart: Product[]
}

export function Total({cart}: TotalProps) {
  
  const getTotal = (cart: Product[]) => {
    let total = 0; 
    cart.forEach((product: Product) => {
      total += product.price;
    });

    return total;
  }

  return (
    <div className={styles['container']}>
      <h1>Total: ${getTotal(cart)}</h1>
    </div>
  );
}

export default Total;
