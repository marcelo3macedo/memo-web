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
    width: 100%;
    width: calc(100% + 5px);
    height: calc(100vh + 50px);
  }
`;

export const Modal = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  padding: 30px 20px 10px 20px;
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

export const Items = styled.div`
  width: 100%;
`;

export const Item = styled.div`
  padding: 10px 0;
`;

export const Action = styled.div`
  max-width: 500px;
  margin: auto;
`;

export const Block = styled.div`
  input,
  textarea {
    width: -webkit-fill-available;
  }
`;

export const BlockTitle = styled.div`
  padding: 5px 0;
`;

export const Group = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 0;

  input {
    width: inherit;
  }
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
