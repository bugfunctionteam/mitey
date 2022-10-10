import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { withTheme } from '~/helpers/testHelpers';
import { H1 } from './H1';

describe('H1', () => {
  it('is visible', () => {
    render(withTheme(<H1>Title</H1>));
    const heading = screen.getByRole('heading', { name: 'Title' });
    expect(heading).toBeVisible();
  });
});
