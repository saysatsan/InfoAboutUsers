import React from 'react';
import {TableRow, TableCell, Button} from '@mui/material';

const UserRow = ({ user, onSelectUser }) => {
  return (
    <TableRow hover>
      <TableCell>{user.name}</TableCell>
      <TableCell align='center'>{user.email}</TableCell>
      <TableCell>{user.company.name}</TableCell>
      <TableCell align='center'>
        <Button onClick={() => onSelectUser(user)}>
          More
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default UserRow;
