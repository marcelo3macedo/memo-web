import styled from 'styled-components';

export const Wrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 100%;
    position: fixed;
    bottom: 0;
  }
`;

export const Content = styled.div`
  svg {
    fill: var(--neutral60);
  }
`;

export const Items = styled.div`
  background: var(--pallete03);
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 5px;
`;

export const Item = styled.div`
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &.active {
    svg {
      fill: var(--secondary100);
    }

    h6 {
      color: var(--secondary100);
    }
  }
`;

export const Title = styled.h6`
  margin-top: 2px;
  color: var(--neutral60);
  font-weight: bold;
`;
