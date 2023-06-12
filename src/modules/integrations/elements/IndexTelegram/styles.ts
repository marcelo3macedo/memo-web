import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 5px 0;
`;

export const Content = styled.div`
  background: var(--neutral10);
  box-shadow: 0 0 1px 1px var(--neutral50);
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: space-between;

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }
`;

export const SubTitle = styled.h5`
  color: var(--primary);
`;

export const Title = styled.h4`
  color: var(--primary);
  font-weight: bold;
`;

export const Options = styled.div`
  padding: 10px 0;
`;

export const Header = styled.div``;

export const Footer = styled.div`
  display: flex;
  padding: 5px 0;
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

export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
