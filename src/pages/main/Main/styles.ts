import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div``;

export const Background = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 300px;

  @media (min-width: 768px) {
    display: none;
  }
`;
