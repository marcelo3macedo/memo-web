import { ModalIndexProps } from '@interfaces/modals/ModalIndexProps';
import styled from 'styled-components';

export const Container = styled.div<ModalIndexProps>`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: ${props => (props.show ? 'flex' : 'none')};
  align-items: center;
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
  justify-content: center;
`;

export const Body = styled.div`
  padding: 10px 0;
`;

export const Footer = styled.div`
  padding-top: 20px;
`;

export const Fields = styled.div`
  padding: 10px;
  max-width: 400px;
  margin: auto;
`;

export const Action = styled.div`
  padding-top: 5px;
  max-width: 400px;
  margin: auto;
`;
