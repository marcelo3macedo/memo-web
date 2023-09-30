import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Content = styled.div`
  text-align: center;
`;

export const Title = styled.div`
  padding: 20px 0;
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  padding-bottom: 20px;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const Options = styled.div`
  padding: 20px 0;
`;

export const FooterText = styled.div`
  padding: 0 10px;
`;

export const Download = styled.div`
  padding: 10px 0;
  margin-bottom: 10px;
`;
