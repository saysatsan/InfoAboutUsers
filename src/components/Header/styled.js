import styled from 'styled-components';

const StyledHeaderContainer = styled.header `
  background-color:rgb(211, 244, 247);
  padding: 20px;
  text-align: center;
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledHeaderTitle = styled.h1 `
  font-size: 32px;
  color:rgb(189, 140, 7);
  cursor: pointer;
`;

export { StyledHeaderContainer, StyledHeaderTitle };