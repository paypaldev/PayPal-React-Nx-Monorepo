import { Route, Routes } from 'react-router-dom';
import styles from './app.module.scss'
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';
import {Paypal} from '@react-monorepo/payments'
import { Product } from '@react-monorepo/product';
import { Total } from '@react-monorepo/shared-ui';

const products:Product[] = [
  {
    id: 1,
    name: 'Todd',
    imgUrl: 'https://www.magnoliajs.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F40ricksp%2Fproduction%2Fc5f637c30b7bbeff36a93bcb89eb36dadf7f44de-400x400.jpg&w=1080&q=75',
    price: 19.99,
    description: 'blah blah blah'
  },
  {
    id: 2,
    name: 'Chris',
    imgUrl: 'https://www.magnoliajs.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F40ricksp%2Fproduction%2F469779a6e64135c54b4f10361e8610bcf2988ab5-400x400.jpg&w=1080&q=75',
    price: 0,
    description: 'blah blah blah'
  },
  {
    id: 3,
    name: 'Tyler',
    imgUrl: 'https://www.magnoliajs.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F40ricksp%2Fproduction%2Fbfeed50cdf7d47aea481f698e9a2b026783fc39b-2048x1638.jpg&w=1080&q=75',
    price: 30,
    description: 'blah blah blah'
  },
  {
    id: 4,
    name: 'Michael',
    imgUrl: 'https://www.magnoliajs.com/_next/image?url=https%3A%2F%2Fcdn.sanity.io%2Fimages%2F40ricksp%2Fproduction%2F8d6ec6a022bfb158804d2f8e274c3314cf7b57e7-400x400.jpg&w=1080&q=75',
    price: 60,
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
      <div>
        <ProductList products={products} cart={true} />
        <Total cart={products} />
      </div>
      <Paypal {...initialOptions}/>
    </div>
  );
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList products={products} cart={false}/>}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
