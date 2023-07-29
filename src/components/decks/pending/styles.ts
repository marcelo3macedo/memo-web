import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  border: 1px solid ${({ theme }) => theme.GRAY_COLOR};
  border-width: 1px;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0 0 0;
`;

export const InfoBlock = styled.div``;

export const Item = styled.div`
  padding: 5px 0;
`;

export const Title = styled.div`
  min-height: 80px;
`;
