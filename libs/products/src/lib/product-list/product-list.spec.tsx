import { render } from '@testing-library/react';
import ProductList from './product-list';

describe('ProductList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProductList />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<ProductList />);
    expect(getByText(/Product List/gi)).toBeTruthy();
  });
});
