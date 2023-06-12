import { ConfirmRemove } from '@interfaces/Session/confirmRemove.interface';
import styled from 'styled-components';

export const Wrapper = styled.div<ConfirmRemove>`
  position: fixed;
  z-index: 22;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, var(--alphaStrong));
  display: ${props => (props.show ? 'block' : 'none')};
`;

export const Content = styled.div`
  padding: 40px;
  padding-bottom: 10px;
  text-align: center;
  background: var(--neutral0);
  width: 550px;
  max-width: 100%;
  margin: 80px auto;
  display: flex;
  align-items: end;
  flex-direction: column;

  @media (max-width: 768px) {
    padding: 40px 20px;
    margin: 20px auto;
    max-width: 300px;
  }
`;

export const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  color: var(--neutral100);

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Description = styled.h5`
  color: var(--neutral100);
  text-align: left;
  padding: 20px 0;
  width: 100%;
`;

export const Action = styled.div`
  padding: 0;
  width: 100%;

  button {
    width: 100%;
    margin: 10px 0;
  }

  &.edit button {
    background: var(--neutral50);
  }
`;

export const Options = styled.div`
  margin: 20px 0;
  width: 100%;
`;
