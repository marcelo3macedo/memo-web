import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 350px;
  margin-right: 40px;
  padding: 10px 0;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const Picture = styled.img`
  max-width: 100%;
  width: 500px;

  &:hover {
    opacity: var(--opacity);
    cursor: pointer;
  }
`;
