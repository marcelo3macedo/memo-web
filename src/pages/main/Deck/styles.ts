import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 0 10px;
  min-height: 100vh;

  @media (min-width: 768px) {
    max-width: 800px;
  }
`;

export const Content = styled.div``;

export const SubTitle = styled.h5`
  color: var(--neutral90);
  margin-bottom: 5px;
`;

export const Title = styled.h1`
  color: var(--secondaryDark);
`;

export const Paragraph = styled.h5`
  padding: 10px 0;
`;

export const Value = styled.input`
  margin: 20px 0 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid var(--neutral80);
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  h3 {
    color: var(--neutral90);
  }

  svg path {
    fill: var(--neutral90);
  }
`;

export const Action = styled.div`
  width: 50%;
  margin: 20px auto;

  button {
    width: 100%;
  }

  @media (min-width: 768px) {
    margin: 25px 0;

    button {
      font-size: 11pt;
      max-width: 300px;
    }
  }
`;

export const Themes = styled.div``;

export const Description = styled.h5`
  color: var(--neutral100);
  white-space: pre-line;
  padding: 10px 0;
`;

export const ThemeTitle = styled.h5`
  color: var(--neutral90);
  font-weight: bold;
`;

export const Info = styled.h5`
  color: var(--neutral100);
`;
