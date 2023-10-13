import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';
import { Message } from '@react-monorepo/shared-ui'

function Home() {
  const msg = `Sorry, your transaction could not be processed...`;
  return <Message content={msg}></Message>;
}

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductList />}></Route>
      <Route path="/orders" element={<OrderList />}></Route>
    </Routes>
  );
}

export default App;
