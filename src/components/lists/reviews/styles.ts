import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  text-align: center;
`;

export const Items = styled.div`
  width: 100%;
  padding: 25px 0;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;

export const Item = styled.div`
  text-align: center;
  width: 50%;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const ItemWrapper = styled.div`
  padding: 5px;
`;
