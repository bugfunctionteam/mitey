import { h } from 'preact';
import { render, screen, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { withTheme } from '~/helpers/testHelpers';
import { PasswordInput } from '.';

describe(PasswordInput, () => {
  it('renders', () => {
    render(withTheme(<PasswordInput />));
    const input = screen.getByPlaceholderText('Password');
    expect(input).toBeVisible();
  });

  it("Input's button shows or hides password", async () => {
    render(withTheme(<PasswordInput disabled />));
    const input = screen.getByPlaceholderText('Password');
    expect(input).toHaveAttribute('type', 'password');
    const showButton = screen.getByText('Show');
    userEvent.click(showButton);
    await waitFor(() => expect(screen.getByText('Hide')).toBeVisible());
    expect(input).toHaveAttribute('type', 'text');
  });
});
