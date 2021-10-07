import { IBanner } from '@interfaces/Banner/banner.interface';
import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Content = styled.div`
`;

export const Block = styled.div<IBanner>`
    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: center;
    min-height: 550px;
    padding: 20px 0;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        margin-bottom: 40px;
        color: var(--secondary100);
    }
    
    .method {
        display: flex;
        width: 70%;

        img { 
            max-width: 250px;
        }

        .info {
            padding-right: 40px;

            h2 { 
                color: var(--warm80);                
            }

            h4 {
                padding: 20px 0;
                color: var(--secondary100);
            }
        }
    }

    .action {
        padding: 20px 0;
        width:80%;
        text-align: center;

        button {
            max-width: 400px;
            width:100%;
            padding: 20px 10px;
            font-size: 16pt;
        }

        img {
            margin-top: 70px;
            max-width: 100%;
        }
    }


    @media (max-width: 768px) {
        min-height: 350px;

        .action {
            width: 90%;
            
            button {
                max-width: 300px;
                width:100%;
                padding: 10px;
                font-size: 12pt;
            }
        }

        .method {
            flex-direction: column;
            width: 80%;

            .info {
                padding-right: 0;
            }
        }
    }
`;

export const Image = styled.img`
    max-width: 450px;

    @media (max-width: 768px) {
        max-width: 250px;
    }
`;

export const Title = styled.h1`
    margin: 40px 0;
    margin-bottom: 10px;
    text-transform: uppercase;
    font-size: 32pt;
    color: var(--warm80);

    @media (max-width: 768px) {
        font-size: 20pt;
        text-align: center;
    }
`;

export const SubTitle = styled.h3`
    color: var(--green80);
    line-height: 25px;

    @media (max-width: 768px) {
        font-size: 10pt;
        line-height: 15px;
        text-align: center;
    }
`;

export const BlockContainerB = styled.div`
    h1 {
        color: #fff;
        text-align: center;
    }

    .items {
        display: flex;
        justify-content: center;
        width: 75%;
        margin: 30px auto;

        .item {
            text-align: center;
            width: 100%;
            padding: 0 20px;

            img {
                max-width: 100%;
            }

            h3 {
                color: var(--warm90);
                text-transform: uppercase;
                padding: 10px 0;
                height: 40px;
                display: flex; 
                align-items: center;
                justify-content: center;
            }

            h5 {
                color: #fff;
                font-weight: bold;
            }
        }
    }

    .full-image {
        max-width: 500px;
        margin: auto;
    }

    @media (max-width: 768px) {
        .items {
            flex-direction: column;

            .item {
                padding: 0;
                width: 70%;
                margin: auto;
                margin-bottom: 40px;

                img {
                    max-width: 100px;
                }

                h3 {
                    height: 40px;
                    display: flex; 
                    align-items: center;
                    justify-content: center;
                }
    
                h5 {
                    color: #fff;
                    font-weight: bold;
                }
            }
        }

        text-align: center;

        .full-image {
            max-width: 90%;
        }
    }
`;