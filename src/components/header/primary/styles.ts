import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE03_COLOR};
  min-width: 300px;
  border-top-right-radius: 10px;

  @media (max-width: 768px) {
    position: absolute;
    display: none;
  }
`;

export const Content = styled.div``;

export const Header = styled.div`
  text-align: center;
  padding: 20px;
`;

export const Infos = styled.div`
  text-align: center;
  padding: 0;
`;

export const MenuArea = styled.div`
  padding: 10px 0;
`;
