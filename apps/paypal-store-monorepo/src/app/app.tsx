import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss'
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';
import {Paypal} from '@react-monorepo/payments'
import { Product } from '@react-monorepo/product';

const products:Product[] = [
  {
    id: 1,
    name: 'Product 1',
    imgUrl: 'path/to/image1.jpg',
    price: 19.99,
    description: 'blah blah blah'
  },
  {
    id: 2,
    name: 'Product 2',
    imgUrl: 'path/to/image2.jpg',
    price: 24.99,
    description: 'blah blah blah'
  },
];

function Home() {

  const initialOptions = {
    "clientId": "ATcbsWeJib7eBUta2p5NaO64gvVFwIjJV2vEBu9wfP_ALWWiUtlxuo0OHxeCBsv807oldJyihRjS5AzR",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };

  return (
    <div className={styles['container']}>
      <ProductList products={products} />
      <Paypal {...initialOptions}/>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList products={products}/>}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
