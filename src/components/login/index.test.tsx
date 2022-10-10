import { h } from 'preact';
import { render, screen, waitFor } from '@testing-library/preact';
import userEvent from '@testing-library/user-event';
import { withTheme, withRouter, createMockRouter } from '~/helpers/testHelpers';
import { LoginPage } from './index';
import { rest } from 'msw';
import { server } from '~/helpers/testHelpers/workerSetup';
import { authenticateMockResponse } from '~/mocks/queryResponseMocks';

const router = createMockRouter();

describe(`${LoginPage}`, () => {
  test("Happy path: login form is visible, title with the client's name is displayed, users can submit their email and password.", async () => {
    render(
      withTheme(
        withRouter(<LoginPage />, {
          ...router,
          query: {
            client_name: 'Hatch',
            client_id: '1',
            response_type: 'code',
            redirect_uri: 'third-party-app.com',
            grant_type: 'password',
            scope: 'some scope',
            state: 'some state',
          },
        }),
      ),
    );

    const pageTitle = screen.getByRole('heading', {
      name: 'Log in to connect your account with Hatch',
    });
    const emailInput = screen.getByRole('textbox', { name: 'username' });
    const passwordInput = screen.getByLabelText('password');
    const loginButton = screen.getByRole('button', { name: 'Log in' });

    expect(pageTitle).toBeVisible();

    expect(emailInput).toBeVisible();
    expect(passwordInput).toBeVisible();
    expect(loginButton).toBeVisible();

    expect(emailInput).toBeEnabled();
    expect(passwordInput).toBeEnabled();
    expect(loginButton).toBeEnabled();

    userEvent.type(emailInput, 'someone@mail.com');
    userEvent.type(passwordInput, '1234');

    userEvent.click(loginButton);

    //Log in button and input fields are disabled while waiting for backend's response
    await waitFor(() => expect(emailInput).toBeDisabled());
    await waitFor(() => expect(passwordInput).toBeDisabled());
    await waitFor(() => expect(loginButton).toBeDisabled());

    //Log in button and input fields are enabled after backend returns a response
    await waitFor(() => expect(emailInput).toBeEnabled());
    await waitFor(() => expect(passwordInput).toBeEnabled());
    await waitFor(() => expect(loginButton).toBeEnabled());

    server.use(
      rest.post('*/api/oauth2/authenticate', (req, res, ctx) =>
        res(ctx.status(200)),
      ),
    );

    const {
      client_name,
      client_id,
      response_type,
      redirect_uri,
      scope,
      state,
    } = authenticateMockResponse;

    expect(router.push).toHaveBeenCalledWith({
      pathname: '/authorize',
      query: {
        client_name,
        client_id,
        response_type,
        redirect_uri,
        scope,
        state,
      },
    });
  });

  test("Show button is displayed and password input's value is hidden by default", async () => {
    render(withTheme(withRouter(<LoginPage />, router)));
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toHaveAttribute('type', 'password');
    const showButton = screen.getByText('Show');
    expect(showButton).toBeVisible();
  });

  test("When the user clicks on the password input's 'Show' button, the input's value becomes visible and button's text changes to 'Hide'", async () => {
    render(withTheme(withRouter(<LoginPage />, router)));
    const passwordInput = screen.getByPlaceholderText('Password');
    const showButton = screen.getByText('Show');
    userEvent.type(passwordInput, '1234');
    userEvent.click(showButton);
    await waitFor(() => expect(screen.getByText('Hide')).toBeVisible());
    expect(passwordInput).toHaveAttribute('type', 'text');
  });
});
