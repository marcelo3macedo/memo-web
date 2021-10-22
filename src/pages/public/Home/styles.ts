import { IBanner } from '@interfaces/Banner/banner.interface';
import styled from 'styled-components';

export const Wrapper = styled.div`
`;

export const Content = styled.div`
`;

export const Block = styled.div<IBanner>`
    background-color: ${props => props.backgroundColor};

    .block-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 1100px; 
        margin: auto;

        .block-text-group h1 {
            line-height: 7px;
            font-size: 32pt;
            color: #f14624;
        }

        .block-subinfo {
            padding: 10px 0 40px 0;

            h4 {
                font-size: 14pt;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        }

        .block-image {
            img {
                max-width: 400px;
            }
        }

        .block-actions {
            button {
                min-width: 250px;
                padding: 15px 0;
                background: #61d37b;
                text-transform: uppercase;
                letter-spacing: 1px;
            }
        }
    }

    .block-container.type2 {
        .block-image {
            img {
                max-width: 580px;
            }
        }

        .block-text-group h1 {
            color: #2ad447;
        }
    }





    background-image: url('${props => props.background}');
    background-size: cover;
    background-position: center;
    min-height: 550px;
    padding: 20px 0;
    padding-bottom: 40px;
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
        flex-direction: column;
        align-items: center;

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
        min-height: 400px;
        
        .block-container {
            padding: 0 10px; 
            
            .block-text-group {
                min-width: 65%;
                
                h1 {
                    font-size: 22pt;
                    line-height: 40px;
                    margin-bottom: 0;
                }

                .block-subinfo {
                    h4 {
                        font-size: 12pt;
                        line-height: 25px;
                    }
                }
            }

            .block-actions {
                text-align: center;
                button {
                    min-width: 200px;
                    padding: 15px 0;
                    background: #61d37b;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
            }

            .block-image {
                position: absolute;
                right: 0;
                opacity: 0.2;

                img {
                    max-width: 170px;
                }
            }
        }

        .block-container.type2 {
            flex-direction: column-reverse;
            padding: 20px 10px;

            .block-image {
                position: relative;
                opacity: 1;

                img {
                    max-width:100%;
                }
            }

            .block-text-group {
                width: 100%;
                margin-bottom: 30px;
            }
        }

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
            padding: 20px 0;

            h1 {
                text-align: center;
                font-size: 22pt;
                padding: 10px 0;
            }

            h2 {
                font-size: 18pt;
            }

            h4 {
                font-size: 14pt;
                line-height: 30px;
            }

            .info {
                padding-right: 0;
            }

            img {
                padding: 40px;
            }
        }

        .action {
            img {
                display: none;
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
                color: var(--warm80);
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
        padding: 20px 0;

        h1 {
            font-size: 22pt;
            line-height: 40px;
            margin-bottom: 0;
        }

        .items {
            flex-direction: column;

            .item {
                padding: 0;
                width: 100%;
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
                    font-size: 14pt;
                }
    
                h5 {
                    color: #fff;
                    font-weight: bold;
                    font-size: 12pt;
                }
            }
        }

        text-align: center;

        .full-image {
            max-width: 90%;
        }
    }
`;