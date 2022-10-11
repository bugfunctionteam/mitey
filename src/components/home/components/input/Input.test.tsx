import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { withTheme } from '~/helpers/testHelpers';
import { Input } from '.';

describe(Input, () => {
  it('renders', () => {
    render(withTheme(<Input type="text" placeholder="Email" />));
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeVisible();
  });
});
