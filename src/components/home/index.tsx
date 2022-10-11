import { h } from 'preact';
import Image from 'next/image';
import {
  H1Row,
} from './HomeStyles';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { NextPage } from 'next';

export const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <Column>
        <Image
          alt="Altruist logo"
          src="/images/mitey-logo.svg"
          height={52}
          width={176}
        />

        <H1Row>
          Mitey
        </H1Row>
      </Column>
    </MainLayout>
  );
};
