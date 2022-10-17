import { MainPage } from '~/components/main';
import { setup } from '~/utils/csrf';

// csrf
export const getServerSideProps = setup(async () => {
  return { props: {}};
});

export default MainPage;
