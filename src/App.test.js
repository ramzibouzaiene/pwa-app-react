import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the coorect title header', () => {
  render(<App />);
  const textElement = screen.getByText(/Videos/i);
  expect(textElement).toBeInTheDocument();
});

test('renders all the videos titles', () => {
  render(<App />);
  const titlesElement = screen.getByRole("heading");
  expect(titlesElement).toBeInTheDocument();
});
