import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Astronomy Photo of the Day/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders copyright label', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Explanation label', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Explanation/i);
  expect(linkElement).toBeInTheDocument();
});
