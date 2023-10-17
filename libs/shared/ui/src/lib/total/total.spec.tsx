import { render } from '@testing-library/react';

import Total from './total';

describe('Total', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Total />);
    expect(baseElement).toBeTruthy();
  });
});
