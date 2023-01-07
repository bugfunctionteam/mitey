import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { HeaderLeft, HeaderRight, Name, PostDate, Description, TicketFileContainer, IconBorder, FileName, EmployeeBreakdownContainer, Percentage, Statement, Stat, StatAmount } from './EmployeeBreakdownStyles';
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


export const EmployeeBreakdown: NextPage = () => {
  return (
    <EmployeeBreakdownContainer>
      <Percentage>83%</Percentage>
      <Description>Percentage of Onboarded Employees</Description>
      <Statement>
        <Stat># of Onboarded</Stat>
        <StatAmount>64</StatAmount>
      </Statement>
      <Statement>
        <Stat># of Employees</Stat>
        <StatAmount>77</StatAmount>
      </Statement>
    </EmployeeBreakdownContainer>
  );
};
