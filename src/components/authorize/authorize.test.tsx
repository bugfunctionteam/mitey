import { h } from 'preact';
import { render, screen, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { withTheme, withRouter, createMockRouter } from '~/helpers/testHelpers';
import { AuthorizationPage } from './index';

const router = createMockRouter();

describe(`${AuthorizationPage}`, () => {
  test("Happy path: authorization details and button are visible, title with the client's name is displayed, user can authorize Altruist's integration", async () => {
    render(
      withTheme(
        withRouter(<AuthorizationPage />, {
          ...router,
          query: { client_name: 'Hatch' },
        }),
      ),
    );
    const pageTitle = screen.getByRole('heading', {
      name: 'Hatch wants to access your Altruist account.',
    });
    const details = screen.getByText(
      'This will allow Hatch to view your account positions and balances.',
    );
    const authorizationButton = screen.getByRole('button', {
      name: 'Connect Altruist',
    });

    expect(pageTitle).toBeVisible();
    expect(details).toBeVisible();
    expect(authorizationButton).toBeVisible();

    expect(authorizationButton).toBeEnabled();

    userEvent.click(authorizationButton);

    //Authorization button is disabled while waiting for backend's response
    await waitFor(() => expect(authorizationButton).toBeDisabled());

    //Authorization button is enabled after backend returns a response
    await waitFor(() => expect(authorizationButton).toBeEnabled());

    //User gets redirected to the 'completed' page
    expect(router.push).toHaveBeenCalledWith('/completed');
  });
});
