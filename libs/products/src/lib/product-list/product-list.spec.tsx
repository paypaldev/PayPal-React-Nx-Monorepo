import { render } from '@testing-library/react';
import ProductList from './product-list';
import { Product } from '@react-monorepo/product';

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

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductList products={products} cart={true}/>);
    expect(baseElement).toBeTruthy();
  });
});
