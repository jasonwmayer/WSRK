import React from 'react';
import { render, test, expect } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText('Load Planner');
  expect(linkElement).toBeInTheDocument();
});
