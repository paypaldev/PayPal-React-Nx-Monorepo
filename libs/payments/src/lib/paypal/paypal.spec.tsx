import { render } from '@testing-library/react';

import Paypal from './paypal';

describe('Paypal', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Paypal />);
    expect(baseElement).toBeTruthy();
  });
});
