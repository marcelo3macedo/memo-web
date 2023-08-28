import { ModalIndexProps } from '@interfaces/modals/ModalIndexProps';
import styled from 'styled-components';

export const Container = styled.div<ModalIndexProps>`
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    left: -5px;
    top: -50px;
    width: calc(100% + 5px);
    height: calc(100vh + 50px);
  }
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  padding: 30px 20px;
  margin: auto;
  width: 100%;
  max-width: 500px;
  border-radius: 10px;
`;

export const Header = styled.div`
  padding-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: space-between;
`;

export const CloseArea = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Content = styled.div``;

export const Actions = styled.div`
  padding: 20px 0 0 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Action = styled.div`
  padding: 10px;
  width: 100%;
`;
