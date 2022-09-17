import styled from "styled-components";
import { Gallery } from "@interfaces/Gallery/gallery.interface";

export const Wrapper = styled.div<Gallery>`
  padding: 20px 0;
  display: ${props => props.visible ? "block": "none"};
`;

export const Content = styled.div`
    background: var(--neutral0);
    border: 1px solid var(--neutral50);
    width: 50%;
    margin: auto;
    text-align: center;
    border-radius: 10px;
    
    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
`;

export const Title = styled.h5`
    padding: 15px;
    color: var(--neutral90);
`;
