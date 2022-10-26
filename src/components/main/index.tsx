import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, DetailsRow } from './MainStyles';
import { NextPage } from 'next';

export const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <Column>
        <H1Row>Mitey</H1Row>
        <DetailsRow>
          Details about Mitey.
        </DetailsRow>
      </Column>
    </MainLayout>
  );
};
