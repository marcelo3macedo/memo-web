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
  margin: 15px 0;
  box-sizing: content-box;
  overflow: hidden;
  border: 1px solid #ccc;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  background: #c6e1ff;
  background: linear-gradient(135deg, #c6e1ff, #d5ccff);
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Number = styled.div`
  padding: 17px 5px;
  width: 60px;
  background: #939393;
  box-sizing: content-box;
  border-radius: 0px;
`;

export const Value = styled.div`
  padding: 10px 0;
  width: 100%;

  h3 {
    margin-left: -20px;
    padding: 0 20px;
  }
`;
