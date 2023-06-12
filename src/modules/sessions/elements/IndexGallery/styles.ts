import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Content = styled.div`
  background: var(--neutral0);
  box-shadow: 0 0 1px 1px var(--neutral50);
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }
`;

export const Header = styled.div``;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
`;

export const Title = styled.h4`
  color: var(--primary);
  font-weight: bold;
`;

export const Description = styled.h5`
  color: var(--primary);
  padding: 5px 0;
  margin: 10px 0;
  overflow: hidden;
  min-height: 50px;

  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Action = styled.div`
  display: flex;
  align-items: end;

  svg {
    path {
      fill: var(--neutral80);
    }
  }
`;

export const Card = styled.div``;

export const Group = styled.h6`
  color: var(--pallete02);
  font-weight: bold;
  padding-right: 20px;
`;
