import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 40px 0px;
  background: var(--secondary15);

  @media (min-width: 768px) {
    max-width: var(--maxWidth);
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const Content = styled.div``;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg path,
  svg polygon {
    fill: var(--neutral100);
  }

  svg.list path,
  svg.list polygon {
    fill: var(--neutral100);
  }
`;

export const Picture = styled.img`
  width: 300px;
  margin: auto;
`;
