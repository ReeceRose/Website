import { render } from '@testing-library/react';

import Header from '../../components/Header';

test('Header component matches snapshot', () => {
  const { asFragment } = render(<Header />);
  expect(asFragment()).toMatchSnapshot();
});
