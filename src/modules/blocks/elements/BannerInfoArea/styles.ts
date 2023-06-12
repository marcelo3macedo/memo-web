import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 80px 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Info = styled.div`
  padding: 20px;
`;

export const Picture = styled.img`
  max-width: 100%;
  width: 400px;
  padding: 0 20px;

  &:hover {
    opacity: var(--opacity);
    cursor: pointer;
  }
`;
