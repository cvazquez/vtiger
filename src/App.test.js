import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('check for Home nav element', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});
