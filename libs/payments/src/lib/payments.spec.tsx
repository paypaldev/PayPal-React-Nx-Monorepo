import { render } from '@testing-library/react';

import Payments from './payments';

describe('Payments', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Payments />);
    expect(baseElement).toBeTruthy();
  });
});
