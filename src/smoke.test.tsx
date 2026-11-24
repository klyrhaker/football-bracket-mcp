import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Environment setup', () => {
  it('renders a React component', () => {
    render(<h1>Football Bracket MCP</h1>);

    expect(
      screen.getByRole('heading', {
        name: 'Football Bracket MCP',
      }),
    ).toBeInTheDocument();
  });
});
