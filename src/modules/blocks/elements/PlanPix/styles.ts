import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 20px 0px;
`;

export const Container = styled.div``;

export const Title = styled.h4`
  color: var(--neutral100);
  font-weight: bold;
  padding-bottom: 10px;
`;

export const Subtitle = styled.h4`
  color: var(--neutral100);
  padding: 5px 0;
`;

export const Steps = styled.div`
  padding: 10px 0;
`;

export const Info = styled.div`
  padding: 10px 0;
  max-width: 400px;
`;

export const InfoTitle = styled.h5`
  padding: 10px 0;
  color: var(--neutral100);
  font-weight: bold;
`;

export const InfoInput = styled.input`
  padding: 5px;
  margin-bottom: 20px;
  border: none;
  width: 100%;
  font-size: 9pt;
  background: var(--neutral0);
  border: 1px solid var(--neutral60);

  @media (min-width: 768px) {
    font-size: 11pt;
  }
`;

export const InfoErrorMessage = styled.h6`
  padding-bottom: 20px;
  margin-top: -10px;
  color: var(--warm90);
  font-weight: bold;
`;

export const Total = styled.div`
  padding: 40px 0;
  text-align: center;
`;

export const Value = styled.h1``;

export const ValueDescription = styled.h3``;
