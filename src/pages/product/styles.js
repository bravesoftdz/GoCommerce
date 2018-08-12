import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 49%;
  min-width: 330px;
  height: 350px;
  border: 1px solid #cecece;
  border-radius: 3px;
  padding: 30px;

  @media (max-width: 823px) {
    width: 100%;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 49%;
  min-width: 330px;
  height: 350px;

  @media (max-width: 823px) {
    width: 100%;
  }

  .title {
    font-size: 28px;
    font-weight: bold;
  }

  .brand {
    font-size: 18px;
    color: #747d8c;
  }

  .price {
    margin-top: 60px;
    font-size: 28px;
    color: #37bea9;
    font-weight: bold;
  }

  button {
    margin: 20px 0;
    background: #37bea9;
    border: none;
    border-radius: 3px;
    font-size: 16px;
    font-weight: bold;
    color: #fff;
    height: 50px;
    text-transform: uppercase;
    &:hover {
      background: #2d9f8d;
    }
  }
`;
