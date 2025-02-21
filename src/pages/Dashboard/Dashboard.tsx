import { useMemo } from 'react';
import './dashboard.styles.scss';
import UserlistIcon from '/assets/icons/users-list.svg';
import ActiveUsers from '/assets/icons/active-users.svg';
import UserLoans from '/assets/icons/users-loans.svg';
import UserSavings from '/assets/icons/users-savings.svg';
import UserList from '../../components/UserList/UserList';
import { useAllUsersStore } from '../../lib/store/useAllUsers';

const StatCard = ({ icon, label, value }: { icon: string; label: string; value: string | number }) => (
  <div className='stat-card' role='stat'>
    <div><img src={icon} alt={`${label} icon`} /></div>
    <p className='users'>{label}</p>
    <div className='number'>{value}</div>
  </div>
);

const Dashboard = () => {
  const allUsers = useAllUsersStore((state) => state.allUsers);
  const numberOfUsers = allUsers.length;
  const activeUsers = useMemo(() => allUsers.filter((user) => user.status === 'active').length, [allUsers]);

  return (
    <div className='dashboard-container'>
      <section className='title'>Users</section>
      <section className='stats'>
        <StatCard icon={UserlistIcon} label='Users' value={numberOfUsers} />
        <StatCard icon={ActiveUsers} label='Active Users' value={activeUsers} />
        <StatCard icon={UserLoans} label='Users with loans' value='12,453' />
        <StatCard icon={UserSavings} label='Users with savings' value='102,453' />
      </section>
      <section>
        <UserList />
      </section>
    </div>
  );
};

export default Dashboard;
