import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 100%;
  padding: 5px;
`;

export const Content = styled.div`
  background-color: ${({ theme }) => theme.LIGHT_COLOR};
  border: 1px solid ${({ theme }) => theme.GRAY_COLOR};
  border-radius: 20px;
  padding: 20px 15px 15px 20px;

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }

  &:active {
    opacity: var(--active);
  }
`;

export const Footer = styled.div`
  padding-top: 15px;
  display: flex;
  align-items: flex-end;
  justify-content: end;
`;

export const Header = styled.div`
  min-height: 50px;
`;
