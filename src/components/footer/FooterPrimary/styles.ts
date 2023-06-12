import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--neutral100);

  @media (max-width: 768px) {
    padding-bottom: 80px;
    margin-top: 0;
  }
`;

export const Content = styled.div``;

export const Copyright = styled.div`
  text-align: center;
  padding: 10px 0;
`;

export const CopyrightMessage = styled.h4`
  color: var(--neutral10);
  padding: 10px 0;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

export const Picture = styled.img`
  width: 80px;
`;

export const Options = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Option = styled.h5`
  padding: 5px 0;
  color: var(--neutral0);

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }
`;
