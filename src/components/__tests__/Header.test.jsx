import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '../../utils/test-utils';
import Header from '../Header';

describe('Header', () => {
  it('renders logo correctly', () => {
    render(<Header />);
    expect(screen.getByText('Wendley.dev')).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Início')).toBeInTheDocument();
    expect(screen.getByText('Sobre')).toBeInTheDocument();
    expect(screen.getByText('Projetos')).toBeInTheDocument();
    expect(screen.getByText('Certificados')).toBeInTheDocument();
    expect(screen.getByText('Contato')).toBeInTheDocument();
  });

  it('renders theme toggle button', () => {
    render(<Header />);
    expect(screen.getByLabelText(/ativar tema/i)).toBeInTheDocument();
  });

  it('renders mobile menu button on small screens', () => {
    render(<Header />);
    expect(screen.getByLabelText(/abrir menu/i)).toBeInTheDocument();
  });
}); 