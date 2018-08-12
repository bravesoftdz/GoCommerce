import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  height: 380px;
  width: 240px;
  border: 1px solid #ecf0f1;
  border-radius: 4px;
  padding: 10px;
  margin-right: 20px;
  margin-bottom: 20px;
  &:hover {
    box-shadow: 0 2px 5px 0 hsla(0, 0%, 0%, 0.2);
  }
`;

export const Image = styled.img`
  margin-bottom: 15px;
  width: 180px;
  height: auto;
`;

export const Title = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 16px;
  color: #000;
`;

export const Brand = styled.div`
  margin-bottom: 15px;
  font-size: 14px;
  color: #a5a5a5;
`;

export const Price = styled.div`
  margin-bottom: 10px;
  font-weight: bold;
  font-size: 22px;
  color: #37bea9;
`;
