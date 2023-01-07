import { Column } from '~/components/common/layout/MainLayoutStyles';
import { MainLayout } from '~/components/common/layout/MainLayout';
import { HeaderLeft, HeaderRight, Name, PostDate, Description, TicketFileContainer, IconBorder, FileName, Percentage, Statement, Stat, StatAmount , StyledEmployeeListContainer, StyledEmployeeListItem } from './EmployeeListStyles';
import { NextPage } from 'next';
import { Container } from '../common/containers/Container';
import { rem } from '~/themes/utilities/rem';
import { AddUserIcon } from '../common/icons/AddUserIcon';
import { Line } from 'rc-progress';
import { Button } from '../common/buttons/Button';
import { Input } from '../common/inputs/Input';
import { COMPONENT_BACKGROUND } from '../common/globalStyles';
import { Dropdown } from '../common/inputs/Dropdown';
import { SearchIcon } from '../common/icons/SearchIcon';
import { NotificationIcon } from '../common/icons/NotificationIcon';
import { PaperIcon } from '../common/icons/PaperIcon';

import { BooleanLabel } from '../common/labels/Label';
import { CheckIcon } from '../common/icons/CheckIcon';
import { ComputerIcon } from '../common/icons/ComputerIcon';
import { PackageIcon } from '../common/icons/PackageIcon';
import { FC, PropsWithChildren } from 'react';
import { PERMANENT_REDIRECT_STATUS } from 'next/dist/shared/lib/constants';

interface Employee {
  id: string;
  name: string;
  gender: 'male' | 'female' | 'other';
  dob: string;
  hireDate: string;
  location: string;
  department: string;
  slack: string;
  email: string;
  onboardingStatus: number;
  position: string;
  deviceStatus: 'working' | 'not working';
  status: string;
  equipmentShipped: boolean;
  swagShipped: boolean;
}

const employees: Employee[] = [
  {
    id: 'f9e8h4f8b8-483fhb8r43b-hb3f8b3ry4u8',
    name: 'Peter Roosevelt',
    gender: 'male',
    dob: '02/14/1997',
    hireDate: '06/13/2019',
    location: 'Miami, FL',
    department: 'Engineering',
    slack: 'slack_id',
    email: 'peter.roosevelt@company.com',
    onboardingStatus: 0.85,
    position: 'Software Engineer',
    deviceStatus: 'working',
    status: 'active',
    equipmentShipped: false,
    swagShipped: true,
  },
];

export const EmployeeListItem = (props: { employee: Employee }) => {
  const { employee } = props;
  return (
    <StyledEmployeeListItem>
      <p style={{ flex: 1, textAlign: 'left' }}>{employee.name}</p>
      <div style={{ width: '100px', height: '100%', boxSizing: 'border-box', display: 'flex', alignItems: 'center', flex: 1 }}>
        <Line percent={employee.onboardingStatus * 100} style={{ width: '70%' }} strokeWidth={8} trailWidth={8} strokeColor="#78E08F" trailColor="rgba(211,211,211,0.25)" />
      </div>
      <p style={{ flex: 1, textAlign: 'left' }}>{employee.position}</p>
      <BooleanLabel
        icon={<CheckIcon />}
        text='Device is Working'
        state='good'
      />
      <Button
        icon={<PaperIcon />}
        text='Deprovision Package'
        onClick={() => {console.log('action');}}
        // style={{ margin: `0 ${rem(2.5)}` }}
      />
      <Button
        icon={<ComputerIcon />}
        text='Equipment Package'
        onClick={() => {console.log('action');}}
        // style={{ margin: `0 ${rem(1.5)}` }}
      />
      <Button
        icon={<PackageIcon />}
        text='Swag Box'
        onClick={() => {console.log('action');}}
        // style={{ margin: `0 ${rem(1.5)}` }}
      />
    </StyledEmployeeListItem>
  );
};

export const EmployeeList = () => {
  return (
    <StyledEmployeeListContainer>
      <>
        {employees.map((e, i) => (
          <EmployeeListItem key={i} employee={e} />
        ))}
      </>
    </StyledEmployeeListContainer>
  );
};

