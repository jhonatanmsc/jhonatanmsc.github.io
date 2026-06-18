import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-markdown', () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => <div>{children}</div>
}));

test('renders resume navigation', () => {
  render(<App />);
  const linkElement = screen.getByText(/view resumes/i);
  expect(linkElement).toBeInTheDocument();
});
