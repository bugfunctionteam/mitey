import { useState } from 'react';
import { useRouter } from 'next/router';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, DetailsRow, CenteredColumn } from './MainStyles';
import { Button } from '~/components/authorize/components/button';
import Image from 'next/image';
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
