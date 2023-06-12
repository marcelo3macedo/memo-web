import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
  margin-top: 200px;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 500px;
  margin: auto;
`;

export const Title = styled.h3`
  padding: 20px 0;
  color: var(--neutral80);
  text-align: center;
`;

export const Picture = styled.img`
  margin: auto;
  width: 100%;
  max-width: 350px;

  @media (max-width: 768px) {
    max-width: 200px;
  }
`;
