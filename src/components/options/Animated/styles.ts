import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  text-align: center;
  padding-bottom: 20px;
  width: 400px;
  margin: auto;
  max-width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Option = styled.div`
  display: flex;
  flex-direction: row;
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

export const Value = styled.div`
  padding: 20px 30px;
  width: 100%;
`;
