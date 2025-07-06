import styled from 'styled-components';
import { Box, Button, Typography } from '@mui/material';

export const StyledBox = styled(Box)`
  && {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 15%;
    left: 50%;
    transform: translate(-60%, -15%);
    width: 45%;
    background-color: #b4efdb;
    border-radius: 15px;
    padding: 3% 6%; 
  }
`;
export const StyledButton = styled(Button) `
  && {
  position: absolute;
  right: 0;
  top: 2%;
  }
`;

export const StyledButtonImg = styled.img `
 && {
  display: flex;
  width: 25px;  
  }
`;

export const StyledTypography = styled(Typography) `
  && {
    margin-bottom: 20px;
    text-transform: uppercase;
    text-decoration: solid;
  }
`;

export const StyledDiv = styled.div `
  display: flex;
  flex-direction: column;
`;
