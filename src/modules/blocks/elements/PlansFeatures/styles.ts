import styled from 'styled-components';

export const Wrapper = styled.div`
  padding-bottom: 40px;
`;

export const Container = styled.div``;

export const Title = styled.h2`
  margin-top: 20px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 2px solid var(--neutral60);

  h4 {
    font-weight: bold;
  }
`;

export const Body = styled.div``;

export const Description = styled.div`
  width: 40%;
`;

export const Option = styled.h4`
  width: 30%;
  text-align: center;
  text-transform: uppercase;
  color: var(--neutral100);
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;

  h4 {
    font-weight: normal;
  }
`;

export const Footer = styled.div`
  width: 100%;
`;

export const Action = styled.div`
  padding: 10px 0;

  @media (max-width: 768px) {
    padding: 5px;
  }
`;
