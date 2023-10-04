import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
`;

export const Container = styled.div`
  border: 1px solid #ccc;
  padding: 40px 0;
  border-radius: 20px;
  background: #9fb9ff;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  &:active {
    position: relative;
    top: 1px;
  }
`;

export const Card = styled.div``;
