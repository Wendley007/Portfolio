import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from '../contexts/ThemeContext';

// Wrapper customizado para testes com ThemeProvider
const AllTheProviders = ({ children }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

// Função customizada de render para incluir providers
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// Re-export everything
export * from '@testing-library/react';

// Override render method
export { customRender as render }; 