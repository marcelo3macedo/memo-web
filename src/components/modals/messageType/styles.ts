import { ModalIndexProps } from '@interfaces/modals/ModalIndexProps';
import styled from 'styled-components';

export const Container = styled.div<ModalIndexProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  padding: 30px 20px;
  margin: auto;
  width: 100%;
  max-width: 600px;
  border-radius: 10px;
`;

export const Header = styled.div`
  padding-bottom: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const CloseArea = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export const Items = styled.div`
  width: 100%;
`;
