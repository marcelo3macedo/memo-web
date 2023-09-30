import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  text-align: center;
  padding-top: 20px;
  width: 400px;
  margin: auto;
  max-width: 100%;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(rgb(237, 237, 237) 5%, rgb(223, 223, 223) 100%)
    rgb(237, 237, 237);
  margin: 10px 0;
  border-radius: 10px;
  box-sizing: content-box;
  overflow: hidden;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Number = styled.div`
  padding: 20px;
  background: gray;
  box-sizing: content-box;
`;

export const Value = styled.div`
  padding: 10px 0;
  width: 100%;
`;
