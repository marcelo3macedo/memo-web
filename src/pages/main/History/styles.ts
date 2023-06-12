import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: 0 10px;
`;

export const Block = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Fields = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px 0;

  input {
    margin-bottom: 5px;
    padding: 15px 10px;
    border-radius: 10px;
    border: 1px solid var(--neutral60);
  }
`;
