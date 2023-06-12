import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  &:hover {
    cursor: pointer;
    opacity: var(--opacity);
  }
`;

export const Content = styled.div`
  min-height: 500px;
  text-align: center;
  background: var(--neutral0);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    padding: 20px;
    min-height: 400px;
  }
`;

export const Title = styled.h3`
  color: var(--primary);
  font-weight: normal;
`;

export const Message = styled.h1`
  color: var(--primary);
`;

export const Image = styled.img`
  position: absolute;
  right: 0;
  opacity: 0.3;
  max-width: 200px;
  z-index: 0;
`;
