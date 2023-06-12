import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-right: 10px;
  position: relative;
  width: 100%;
  max-width: 200px;
  height: 200px;
  border-radius: 10px;
  background: var(--neutral0);
  overflow: hidden;

  @media (min-width: 768px) {
    max-width: 100%;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

export const Header = styled.div`
  height: 140px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Details = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const Title = styled.h2`
  color: var(--secondaryDark);
  padding: 0 10px;
`;

export const Status = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    path {
      fill: var(--neutral80);
    }
  }
`;

export const StatusTitle = styled.h6`
  color: var(--neutral80);
  padding: 0 5px;
  font-weight: normal;
`;

export const Deck = styled.div`
  text-align: center;

  @media (min-width: 768px) {
    width: 400px;
  }
`;
