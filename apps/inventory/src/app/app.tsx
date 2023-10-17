// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ProductList, products } from '@react-monorepo/products';
import { Total } from '@react-monorepo/shared-ui'

export function App() {
  return (
    <div>
        <ProductList products={products} cart={true}/>
        <Total cart={products}></Total>
    </div>  
  );
}

export default App;
