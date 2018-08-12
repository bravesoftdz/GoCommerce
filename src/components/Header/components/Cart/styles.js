import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  color: #bdc3c7;
  user-select: none;
  text-decoration: none;
  font-size: 15px;
  &:hover {
    color: #7a7a7a;
  }
`;
