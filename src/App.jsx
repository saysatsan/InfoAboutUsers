import React from 'react';
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import UserTable from './components/UserTable/UserTable';
import UserModal from './components/UserModal/UserModal';
import { TextField } from '@mui/material';

function App() {
  const [userData, setUserData] = useState ([]);
  const [filterData, setFilterData] = useState ('');
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error('Request failed', err))
  }, []);

  const filterUsers = userData.filter((user) => 
    user.name.toLowerCase().includes(filterData.toLowerCase())
  );

  return (
    <div className="App">
      <Header />
      <main>
        <TextField id="outlined-basic" label="Search user" variant="outlined"
        value={filterData}
        onChange={(e) => setFilterData(e.target.value)}/>
        <UserTable 
          userData={filterUsers}
          onSelectUser={setSelectedUser}
        />
        <UserModal
          user={selectedUser}
          open={Boolean(selectedUser)}
          close={() => setSelectedUser(null)}
        />
      </main>
    </div>
  );
};

export default App;
