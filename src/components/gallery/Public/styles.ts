import styled from 'styled-components';

export const Wrapper = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.LIGHT_COLOR};
  border: 1px solid ${({ theme }) => theme.BORDER_COLOR};
  border-radius: 5px;
  padding: 10px 20px;
  margin: 5px 0;
  flex-direction: column;
`;

export const Header = styled.div`
  min-height: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Infos = styled.div`
  padding-top: 20px;
  width: 100%;
`;

export const InfoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  padding: 10px 0;
`;
