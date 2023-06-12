import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Container = styled.div`
  padding: 20px 0;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid var(--neutral50);

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const Body = styled.div``;

export const HeaderTitle = styled.h4`
  color: var(--neutral100);
  font-weight: bold;
  min-width: 400px;

  @media (max-width: 768px) {
    min-width: inherit;
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 0;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

export const LineContent = styled.h4`
  color: var(--neutral100);
  min-width: 400px;

  @media (max-width: 768px) {
    min-width: inherit;
  }
`;
