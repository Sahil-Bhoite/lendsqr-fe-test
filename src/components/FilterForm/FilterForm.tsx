import { useAllUsersStore } from '../../lib/store/useAllUsers';
import './filterform.styles.scss';
import SelectArrow from '/assets/icons/select-down.svg';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';

type FormProps = {
  formProps: {
    toggleForm: React.Dispatch<React.SetStateAction<boolean>>;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  };
};

const FilterForm = ({ formProps }: FormProps) => {
  const { toggleForm, setCurrentPage } = formProps;

  const allUsers = useAllUsersStore((state) => state.allUsers);
  const [allOrganizations, setAllOrganizations] = useState<string[]>([]);
  const [allStatuses, setAllStatuses] = useState<string[]>([]);
  const [organization, setOrganization] = useState<string>('');
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [status, setStatus] = useState<string>('');

  useEffect(() => {
    const sortOrganizations = () => {
      const sortedOrgsArray = Array.from(new Set(allUsers.map((user) => user.organizationName)));
      const sortedStatusArray = Array.from(new Set(allUsers.map((user) => user.status)));

      setAllOrganizations(sortedOrgsArray);
      setAllStatuses(sortedStatusArray);
    };

    sortOrganizations();
  }, [allUsers]);

  const resetUsers = useAllUsersStore((state) => state.resetUsers);

  const handleFilter = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredData = allUsers.filter((user) => {
      const userDateJoined = new Date(user.dateJoined);
      const convertedDate = userDateJoined.toISOString().split('T')[0];
      return (
        (!organization || user.organizationName.includes(organization)) &&
        (!username || user.personalInfo.userName.includes(username)) &&
        (!email || user.personalInfo.emailAddress.includes(email)) &&
        (!date || convertedDate === date) &&
        (!phoneNumber || user.personalInfo.phoneNumber.includes(phoneNumber)) &&
        (!status || user.status === status)
      );
    });

    setCurrentPage(0);
    useAllUsersStore.setState({ filteredUsers: filteredData });
    toggleForm(false);
  };

  const handleFormReset = () => {
    setOrganization('');
    setUsername('');
    setEmail('');
    setDate('');
    setPhoneNumber('');
    setStatus('');
    resetUsers();
  };

  return (
    <div className='form-container'>
      <form onSubmit={handleFilter}>
        <div className='form-control-group'>
          <label htmlFor='organization' className='label'>Organization</label>
          <div className='select-container'>
            <img src={SelectArrow} alt='select' />
            <select
              className='form-select'
              id='organization'
              value={organization}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setOrganization(event.target.value)}
            >
              <option>Organisation</option>
              {allOrganizations.map((org, uuid) => (
                <option value={org} key={uuid}>{org}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='form-control-group'>
          <label htmlFor='username' className='label'>Username</label>
          <input
            type='text'
            className='form-input'
            placeholder='User'
            id='user'
            value={username}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
          />
        </div>

        <div className='form-control-group'>
          <label htmlFor='email' className='label'>Email</label>
          <input
            type='text'
            className='form-input'
            placeholder='Email'
            id='email'
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
          />
        </div>

        <div className='form-control-group'>
          <label htmlFor='date' className='label'>Date</label>
          <input
            type='date'
            className='form-input'
            id='date'
            placeholder='Date'
            value={date}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setDate(event.target.value)}
          />
        </div>

        <div className='form-control-group'>
          <label htmlFor='phone' className='label'>Phone Number</label>
          <input
            type='tel'
            className='form-input'
            id='phone'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(event: ChangeEvent<HTMLInputElement>) => setPhoneNumber(event.target.value)}
          />
        </div>

        <div className='form-control-group'>
          <label htmlFor='status' className='label'>Status</label>
          <div className='select-container'>
            <img src={SelectArrow} alt='select' />
            <select
              className='form-select'
              id='status'
              value={status}
              onChange={(event: ChangeEvent<HTMLSelectElement>) => setStatus(event.target.value)}
            >
              <option>Status</option>
              {allStatuses.map((status) => (
                <option value={status} key={status}>{status}</option>
              ))}
            </select>
          </div>
        </div>

        <div className='buttons'>
          <button type='button' className='reset-btn' onClick={handleFormReset}>Reset</button>
          <button type='submit' className='filter-btn'>Filter</button>
        </div>
      </form>
    </div>
  );
};

export default FilterForm;