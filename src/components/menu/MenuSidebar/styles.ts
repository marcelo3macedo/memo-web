import styled from 'styled-components';

export const Wrapper = styled.div`
  background: var(--neutral10);
  width: 100px;

  @media (max-width: 768px) {
    display: none;
  }

  .options {
    display: none;
  }

  &:hover {
    -webkit-transition: width 0.2s ease-in-out;
    -moz-transition: width 0.2s ease-in-out;
    -o-transition: width 0.2s ease-in-out;
    transition: width 0.2s ease-in-out;
    width: 300px;

    .title,
    .options {
      display: block;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const Image = styled.img`
  width: 70px;
  max-width: 100%;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--secondaryDark);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 20px 15px;
`;

export const Title = styled.h2`
  padding: 0 10px;
  color: var(--neutral0);
  display: none;
`;

export const Account = styled.div`
  display: none;
`;

export const Options = styled.div``;
