import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  text-align: center;
`;

export const Card = styled.div<any>`
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-image: ${props =>
    `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.8)), url(${props.background})`};
  border-radius: 20px;
  background-size: cover;
`;

export const CardContent = styled.div`
  padding: 30px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 20px;
`;

export const Title = styled.div`
  padding: 10px 0;
`;

export const Info = styled.div`
  padding: 10px 0;
`;

export const Action = styled.div`
  padding-top: 20px;
  max-width: 500px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Actions = styled.div``;
