import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div``;

export const Items = styled.div``;

export const Item = styled.div`
  padding: 5px 10px;
`;

export const ItemFooter = styled.div`
  padding: 40px 10px;
  max-width: 450px;
  margin: auto;
`;

export const Row = styled.div`
  padding: 10px 0;
`;

export const Group = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 0;
`;

export const RadioArea = styled.div`
  display: flex;
`;

export const RadioIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;

  svg {
    fill: ${({ theme }) => theme.PRIMARY_COLOR};
  }
`;

export const RadioInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 5px;
`;

export const RadioTitle = styled.h4`
  color: ${({ theme }) => theme.PRIMARY_COLOR};
  font-weight: normal;
`;

export const RadioDescription = styled.h5`
  color: ${({ theme }) => theme.PRIMARY_COLOR};
  font-weight: normal;
`;
