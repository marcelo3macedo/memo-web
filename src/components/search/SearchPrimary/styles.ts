import styled from 'styled-components';

type WrapperProps = {
  show: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: var(--secondary10);
  z-index: 999;
  display: ${props => (props.show ? 'block' : 'none')};

  @media (min-width: 768px) {
    background: rgba(0, 0, 0, var(--alpha));
  }
`;

export const Content = styled.div`
  padding: 5px;

  @media (min-width: 768px) {
    background: #fff;
    width: 800px;
    margin: auto;
    border: 2px solid var(--neutral80);
    border-radius: 10px;
    padding: 15px;
    margin-top: 40px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--neutral80);
  padding: 10px 0;

  svg {
    padding: 5px;

    path {
      color: var(--neutral80) !important;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Field = styled.input`
  padding: 10px;
  width: 100%;
  border: none;
  background: none;
  color: var(--neutral90);
`;

export const Body = styled.div`
  height: 100vh;
  width: 100%;
`;

export const CloseArea = styled.div`
  padding-top: 60px;

  svg {
    border: 1px solid var(--neutral80);
    border-radius: 20px;
    padding: 15px;

    path {
      fill: var(--neutral80) !important;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0px;
    margin-bottom: 10px;

    svg {
      border: none;
      padding: 10px;
    }
  }
`;

export const Footer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

export const FooterTitle = styled.h2`
  display: none;

  @media (min-width: 768px) {
    display: block;
    color: var(--neutral90);
  }
`;
