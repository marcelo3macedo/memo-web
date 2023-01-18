import { IReviewCard } from "@interfaces/Review/card.interface";
import styled from "styled-components";

export const Wrapper = styled.div`    
    padding: 15px 0;
    max-width: 800px;
    margin: auto;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Content = styled.div<IReviewCard>`
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;

    transform: ${props=> props.flip ? 'rotateY(180deg)': '' };
`;

