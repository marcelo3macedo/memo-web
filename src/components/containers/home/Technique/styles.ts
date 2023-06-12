import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: var(--pastelGreen);
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: var(--maxWidth);
  margin: auto;
  min-height: 700px;

  @media (max-width: 768px) {
    min-height: 550px;
  }
`;

export const Group = styled.div`
  padding: 0 10px;
  text-align: center;
`;

export const Picture = styled.img`
  max-width: 100%;
  padding: 20px 0;

  @media (min-width: 768px) {
    max-width: 600px;
  }
`;

export const Title = styled.h1`
  line-height: 40px;
  text-align: center;
  margin-bottom: 0;
  color: var(--green90);

  @media (min-width: 768px) {
    line-height: 60px;
    font-size: 32pt;
  }
`;

export const TitleArea = styled.div`
  padding: 20px 10px;
`;
