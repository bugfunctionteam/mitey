import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { H1Row, DetailsRow, TopRow, SupportTicketContainer, Header, HeaderLeft, HeaderRight, Name, PostDate, Description, TicketFileContainer, IconBorder, FileName } from './SupportTicketStyles';
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
import { PaperIcon } from '../common/icons/PaperIcon';

// Amount of Devices breakdown
// Amount of employees fully onboarded (plus %), % of fully offboarded employees
// open support tickets?
// service pricing? (settings page)

export const SupportTicket: NextPage = () => {
  return (
    <SupportTicketContainer>
      <Header>
        <Name>Aspen Siphron</Name>
        <PostDate>14:07 June 15, 2022</PostDate>
      </Header>
      <Description>
          Please send me the support file Mitey. We need to send the client who made the request
      </Description>
      <TicketFileContainer>
        <IconBorder>
          <PaperIcon height={20} width={20} />
        </IconBorder>
        <FileName>Mitey Support.ttx</FileName>
      </TicketFileContainer>
    </SupportTicketContainer>
  );
};
