import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the wine statistics dashboard', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /statistical measures of the wine dataset/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /raw data/i })).toBeInTheDocument();
});
