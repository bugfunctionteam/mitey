import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, TopRow, MainContainer, Header, HeaderLeft, HeaderRight } from './EmployeeStyles';
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
import { EmployeeInfoForm } from '../forms/employeeInfoForm';
import Image from 'next/image';
import headshot from 'public/images/Avatar.png';

// Amount of Devices breakdown
// Amount of employees fully onboarded (plus %), % of fully offboarded employees
// open support tickets?
// service pricing? (settings page)

const initialValues = {
  gender: '',
  hireDate: '',
  position: '',
  dob: '',
  department: '',
  supervisor: '',
  address1: '',
  address2: '',
  city: '',
  state: '',
  zip: '',
};

export const EmployeePage: NextPage = () => {
  return (
    <MainLayout>
      <Header>
        <HeaderLeft>
          <H1Row>Dashboard</H1Row>
          <Input
            name='search'
            placeholder='Search'
            buttonIcon={<SearchIcon height={25} />}
            onClick={() => {console.log('action')}}
            style={{ padding: `${rem(20)} 0` }}
          />
        </HeaderLeft>
        <HeaderRight>
          <Button
            text=''
            icon={<NotificationIcon height={25} />}
            onClick={() => {console.log('action')}}
          />
          <Dropdown
            text='Kyle Williams'
            style={{ margin: `${rem(20)} 0` }}
          />
        </HeaderRight>
      </Header>
      <MainContainer style={{ flex: 1 }}>
        <Column style={{ flex: 1, marginRight: rem(20) }}>
          <TopRow>
            <Container fill header title="Profile">
              <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: `0 ${rem(100)}` }}>
                <Image
                  src={headshot}
                  height={rem(2000)}
                  width={rem(2000)}
                />
                <Button
                  text='Update'
                  style={{ marginTop: rem(20) }}
                  onClick={() => {console.log('action')}}
                />
              </div>
              <EmployeeInfoForm initialValues={initialValues} />
            </Container>
            <Container header title="Updates from Admin" style={{ maxWidth: '30%' }}>
              <div>
                <SupportTicket />
                <SupportTicket />
              </div>
            </Container>
          </TopRow>
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
            <EmployeeList />
          </Container>
        </Column>
      </MainContainer>
    </MainLayout>
  );
};
