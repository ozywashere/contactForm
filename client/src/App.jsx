import { useState, useEffect } from 'react';
import useAxiosFetch from './hooks/useAxiosFetch';
import Contacts from './features/Contacts';

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  status: '',
  phone: '',
  location: '',
};
function App() {
  const { isLoading, isError, data } = useAxiosFetch('/users');
  const [users, setUsers] = useState([]);
  const [initialValues, setInitialValues] = useState(initialState);
  const [search, setSearch] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [sortBy, setSortBy] = useState('');

  useEffect(() => {
    if (data) {
      setUsers(data);
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      id: new Date().getTime().toString(),
      ...initialValues,
    };
    setUsers([...users, newUser]);
    setInitialValues(initialState);
  };
  return (
    <main className='min-h-screen flex justify-center'>
      <Contacts
        users={users}
        isLoading={isLoading}
        isError={isError}
        initialValues={initialValues}
        setInitialValues={setInitialValues}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}

export default App;
