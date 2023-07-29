import { MobModalProps } from '@interfaces/menu/MobModalProps';
import styled from 'styled-components';

export const Background = styled.div<MobModalProps>`
  @media (max-width: 768px) {
    display: ${props => (props.show ? 'block' : 'none')};
    background-color: rgba(0, 0, 0, 0.4);
    width: 100%;
    position: absolute;
    height: 100vh;
  }
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.PALLETE03_COLOR};
  min-width: 300px;
  border-top-right-radius: 10px;

  @media (max-width: 768px) {
    position: absolute;
    z-index: 2;
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
