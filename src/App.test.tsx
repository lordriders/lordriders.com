import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders lord riders text', () => {
  render(<App />);
  const text = screen.getByText(/lord riders/i);
  expect(text).toBeInTheDocument();
});
