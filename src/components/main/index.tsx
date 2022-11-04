import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, DetailsRow, TopRow, MainContainer, Header, HeaderLeft, HeaderRight } from './MainStyles';
import { NextPage } from 'next';
import { Container } from '../common/containers/Container';
import { rem } from '~/themes/utilities/rem';
import { AddUserIcon } from '../common/icons/AddUserIcon';
import { Button } from '../common/buttons/Button';
import { Input } from '../common/inputs/Input';
import { COMPONENT_BACKGROUND } from '../common/globalStyles';
import { Dropdown } from '../common/inputs/Dropdown';
import { SearchIcon } from '../common/icons/SearchIcon';
import { NotificationIcon } from '../common/icons/NotificationIcon';

export const MainPage: NextPage = () => {
  return (
    <MainLayout>
      <Header>
        <HeaderLeft>
          <H1Row>Dashboard</H1Row>
          <Input
            name='search'
            placeholder='Search'
            buttonIcon={<SearchIcon height={25} />}
            onClick={() => {}}
            style={{ padding: `${rem(20)} 0` }}
          />
        </HeaderLeft>
        <HeaderRight>
          <Button
            text=''
            icon={<NotificationIcon height={25} />}
            onClick={() => {}}
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
            <Container header={true} title="Support Tickets">
              EXTRA
            </Container>
            <Container header={true} title="Pricing">
              EXTRA
            </Container>
            <Container header={true} title="Project Deliveries">
              EXTRA
            </Container>
          </TopRow>
          <Container
            header={true}
            title="Employees"
            settings={{
              title: 'Add Employee',
              logo: <AddUserIcon />,
              action: () => {},
            }}
            fill
          >
            EXTRA
          </Container>
        </Column>
        <Column style={{ width: '25%' }}>
          <Container fill>
            Details about Mitey.
          </Container>
        </Column>
      </MainContainer>
    </MainLayout>
  );
};
