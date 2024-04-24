import { render } from '@testing-library/react';

import SharedUi from './shared-ui';

describe('SharedUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SharedUi />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getByText } = render(<SharedUi />);
    expect(getByText(/Shared UI/gi)).toBeTruthy();
  });
});
