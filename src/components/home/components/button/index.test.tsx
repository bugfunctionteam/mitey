import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { withTheme } from '~/helpers/testHelpers';
import {
  Button,
  disabledStateStyles,
} from '~/components/login/components/button';

describe(Button, () => {
  it('is visible', () => {
    render(withTheme(<Button>Submit</Button>));
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toBeVisible();
  });

  //TODO: add screenshot testing to avoid testing implementation details
  it('displays disabled state correctly', () => {
    render(withTheme(<Button disabled>Submit</Button>));
    const button = screen.getByRole('button', { name: 'Submit' });
    expect(button).toBeDisabled();
    expect(button).toHaveStyle(disabledStateStyles);
  });
});
