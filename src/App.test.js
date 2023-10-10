import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/African NFT Market/i);
  expect(linkElement).toBeInTheDocument();
});
