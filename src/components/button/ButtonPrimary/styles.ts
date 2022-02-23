import { Button } from "@interfaces/Button/button.interface";
import styled from "styled-components";

export const Wrapper = styled.button<Button>`
    padding: 10px 20px;
    border-radius: 10px;
    background: var(--secondary100);
    background: linear-gradient(0deg, var(--secondary100) 0%, var(--secondary100) 50%, var(--secondary90) 100%);
    color: var(--textSecondary100);
    border: none;
    min-width: 100px;
    text-align: center;
    opacity: ${props => props.disabled ? 'var(--alpha)': 1};
    
    h5 {
        font-weight: bold;
    }

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }

    &:focus {
        border: none;
    }

    svg {
        circle {
            stroke: #fff;
        }
    }
    
    &:active {
        opacity: var(--alpha);
    }
`;

export const TextValue = styled.h5`
`;

export const Loading = styled.div`
    opacity: var(--alpha);
`;