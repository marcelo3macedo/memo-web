import styled from "styled-components";

type WrapperProps = {
    show: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vH;
    background: var(--secondary10);
    z-index: 999;
    display: ${props => props.show ? "block": "none"};
`;

export const Content = styled.div`
    padding: 5px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    border-bottom: 1px solid #333;
    padding: 5px 0;

    svg {
        padding: 5px;
    }
`;

export const Field = styled.input`
    padding: 10px;
    width: 100%;
    border: none;
    background: none;
`;

export const Body = styled.div`
    height: 100vH;
    width: 100%;
`;
