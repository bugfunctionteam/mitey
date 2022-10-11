import { h } from 'preact';
import { HomePage } from '~/components/home';
import { setup } from '~/utils/csrf';

// csrf
export const getServerSideProps = setup(async () => {
  return { props: {}};
});

export default HomePage;
