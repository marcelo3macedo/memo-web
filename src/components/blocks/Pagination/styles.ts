import styled from "styled-components";
import { Gallery } from "@interfaces/Gallery/gallery.interface";

export const Wrapper = styled.div<Gallery>`
  padding: 20px 0;
  display: ${props => props.visible ? "block": "none"};
`;

export const Content = styled.div`
    border: 1px solid var(--neutral80);
    width: 50%;
    margin: auto;
    text-align: center;
`;

export const Title = styled.h5`
    padding: 10px;
    color: var(--neutral90);
`;
