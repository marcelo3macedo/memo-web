import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE03_COLOR};
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
`;

export const IconArea = styled.div``;

export const Header = styled.div`
  text-align: center;
  padding: 10px;
`;

export const Infos = styled.div`
  text-align: center;
  padding: 0;
`;

export const MenuArea = styled.div`
  padding: 10px 0;
`;
