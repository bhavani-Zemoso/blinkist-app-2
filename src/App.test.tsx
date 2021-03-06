import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'

test('renders main App', () => {
  render(<Router>
    <App />
    </Router>);
  const linkElement = screen.getByTestId("App");
  expect(linkElement).toBeInTheDocument();
});
