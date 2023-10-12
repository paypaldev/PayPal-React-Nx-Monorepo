import { Route, Routes } from 'react-router-dom';

// importing the component from the library
import { ProductList } from '@react-monorepo/products';
import { OrderList } from '@react-monorepo/orders';
import { Paypal, PaypalProps } from '@react-monorepo/payments';

function Home() {
  const initialOptions:PaypalProps = {
    "clientId": "test",
    "enable-funding": "paylater,venmo,card",
    "disable-funding": "",
    "data-sdk-integration-source": "integrationbuilder_sc",
  };
  return <Paypal {...initialOptions}/>;
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
