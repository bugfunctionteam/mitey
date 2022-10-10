import { h } from 'preact';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, DetailsRow, CenteredColumn } from './AuthorizeStyles';
import { Button } from '~/components/authorize/components/button';
import Image from 'next/image';
import { NextPage } from 'next';

export const AuthorizationPage: NextPage = () => {
  const [isAuthorizing, setIsAuthorizing] = useState(false);
  const router = useRouter();
  const { client_name: clientName } = router.query;

  function authorize() {
    // TO DO: call authorize endpoint
    setIsAuthorizing(true);
    setTimeout(() => {
      setIsAuthorizing(false);
      router.push('/completed');
    }, 500);
  }

  return (
    <MainLayout>
      <Column>
        <Image
          alt="Altruist logo"
          src="/images/main-logo.svg"
          height={52}
          width={176}
        />
        <H1Row>{clientName} wants to access your Altruist account.</H1Row>
        <DetailsRow>
          This will allow {clientName} to view your <br />
          account positions and balances.
        </DetailsRow>
      </Column>
      <CenteredColumn>
        <Button onClick={authorize} disabled={isAuthorizing}>
          Connect Altruist
        </Button>
      </CenteredColumn>
    </MainLayout>
  );
};
