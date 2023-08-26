import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 5px 0;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.LIGHTGRAY_COLOR};
  border-radius: 5px;
  padding: 5px;

  svg {
    padding: 8px;
  }

  input {
    padding: 10px 5px;
    border: none;
    color: var(--neutral100);
    background: none;
    width: 100%;

    &::placeholder {
      color: var(--neutral60);
    }
  }

  span {
    font-size: 8pt;
    text-align: right;
    color: var(--alert);
  }
`;
