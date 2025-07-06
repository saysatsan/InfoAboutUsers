import React from 'react';
import { Modal, Typography } from '@mui/material';
import { StyledBox, StyledButton, StyledButtonImg, StyledDiv, StyledTypography } from './styled';

const UserModal = ({ user, open, close }) => {
  if (!user) return null;

  return (
    <Modal open={open} onClose={close}>
      <StyledBox>
        <StyledButton onClick={close}>
          <StyledButtonImg src="https://img.icons8.com/?size=100&id=83981&format=png&color=000000" alt="Button Close" />
        </StyledButton>
        <StyledTypography>{user.name}</StyledTypography>
        <StyledDiv>
          <Typography>
            Address: {user.address.zipcode}, {user.address.city}, {user.address.street}
          </Typography>
          <Typography>Phone: {user.phone}</Typography>
          <Typography>Site: {user.website}</Typography>  
        </StyledDiv>      
      </StyledBox>
    </Modal>
 );
};

export default UserModal;
