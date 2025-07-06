import React from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,  
  TableCell,
  TableBody,  
  Paper
} from '@mui/material';
import UserRow from '../UserRow/UserRow';

const UserTable = ({ userData = [], onSelectUser }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell align="center"><strong>Email</strong></TableCell>
            <TableCell><strong>Company</strong></TableCell>
            <TableCell align="center"><strong>More...</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((user) => (
            <UserRow
              key={user.id}
              user = {user}
              onSelectUser = {onSelectUser}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
