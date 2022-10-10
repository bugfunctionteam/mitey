import { h } from 'preact';
import { LoginPage } from '~/components/login';
import { setup } from '~/utils/csrf';

// csrf
export const getServerSideProps = setup(async () => {
  return { props: {}};
});

export default LoginPage;
