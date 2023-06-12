import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 30px 0;

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Picture = styled.img`
  max-height: 80px;
`;

export const Message = styled.div`
  padding: 0 20px;
  text-align: center;
`;

export const Title = styled.h2``;

export const Subtitle = styled.h4`
  padding: 5px 0;
  font-style: italic;
`;
