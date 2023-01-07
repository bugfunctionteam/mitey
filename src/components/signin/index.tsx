import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, TopRow, MainContainer, Header, HeaderLeft, HeaderRight } from './SignInStyles';
import { NextPage } from 'next';
import { Container } from '~/components/common/containers/Container';
import { rem } from '~/themes/utilities/rem';
import { AddUserIcon } from '~/components/common/icons/AddUserIcon';
import { Button } from '~/components/common/buttons/Button';
import { Input } from '~/components/common/inputs/Input';
import { Dropdown } from '~/components/common/inputs/Dropdown';
import { SearchIcon } from '~/components/common/icons/SearchIcon';
import { NotificationIcon } from '~/components/common/icons/NotificationIcon';
import { SupportTicket } from '~/components/supportTickets';
import { EmployeeBreakdown } from '~/components/employeeBreakdown';
import { DeviceBreakdown } from '~/components/deviceContainer';
import { EmployeeList } from '~/components/employeeList';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

// Amount of Devices breakdown
// Amount of employees fully onboarded (plus %), % of fully offboarded employees
// open support tickets?
// service pricing? (settings page)

export const SignInPage: NextPage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const sessionLoading = status === 'loading';

  if (status === 'authenticated') {
    return (
      <MainLayout>
        <MainContainer style={{ flex: 1 }}>
          <Column style={{ flex: 1, marginRight: rem(20) }}>
            <Container
              header
              title="Employees"
              settings={{
                title: 'Add Employee',
                logo: <AddUserIcon />,
                action: () => {console.log('action')},
              }}
              fill
            >
              {sessionLoading ? <></> : <EmployeeList />}
            </Container>
          </Column>
          <Column style={{ width: '20%' }}>
            <Container fill>
              Details about Mitey.
            </Container>
          </Column>
        </MainContainer>
      </MainLayout>
    );
  }

  if (status === 'unauthenticated') {
    router.replace('/signin');
  }
  return <><div /></>;
};
