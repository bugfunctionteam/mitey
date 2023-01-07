import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { HeaderLeft, HeaderRight, Name, PostDate, Description, TicketFileContainer, IconBorder, FileName, Amount, Statement, Stat, StatAmount, DeviceBreakdownContainer } from './DeviceBreakdownStyles';
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


export const DeviceBreakdown: NextPage = () => {
  return (
    <DeviceBreakdownContainer>
      <Amount>79</Amount>
      <Description>Amount of Employee Devices</Description>
      <Statement>
        <Stat># of Apple</Stat>
        <StatAmount>72</StatAmount>
      </Statement>
      <Statement>
        <Stat># of Windows</Stat>
        <StatAmount>0</StatAmount>
      </Statement>
      <Statement>
        <Stat># of Linux</Stat>
        <StatAmount>5</StatAmount>
      </Statement>
    </DeviceBreakdownContainer>
  );
};
