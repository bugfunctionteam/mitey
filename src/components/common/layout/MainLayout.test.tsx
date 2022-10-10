import { h } from 'preact';
import { render, screen } from '@testing-library/preact';
import { MainLayout } from '~/components/common/layout/MainLayout';

describe(MainLayout, () => {
  test('MainLayout component renders', () => {
    render(
      <MainLayout>
        <h1>Layout</h1>
      </MainLayout>,
    );
    const child = screen.getByText('Layout');
    expect(child).toBeVisible();
  });
});
