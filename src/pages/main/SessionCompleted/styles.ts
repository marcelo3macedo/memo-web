import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 15px 0;
  max-width: 800px;
  margin: auto;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

export const Content = styled.div`
  min-height: 500px;
  padding: 0 40px;
  text-align: center;
  background: var(--neutral0);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    border-radius: 0;
    min-height: 100vh;
  }
`;

export const Actions = styled.div`
  padding: 20px 0;

  @media (min-width: 768px) {
    max-width: 400px;
    margin: auto;
  }
`;

export const Resume = styled.div`
  padding: 15px 0;
`;

export const ResumeTitle = styled.h3`
  color: var(--neutral90);
`;

export const ResumeItem = styled.div`
  @media (min-width: 768px) {
    display: flex;

    div {
      width: 25%;
      display: flex;
      align-items: center;
    }
  }
`;
