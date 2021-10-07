import React from 'react';

import background from "@assets/banners/background.png";
import backgroundColored from "@assets/banners/backgroundColored.png";
import logo from "@assets/logoHorizontal.png";
import info01 from "@assets/banners/info1.png";
import info02 from "@assets/banners/info2.png";
import info03 from "@assets/banners/info3.png";
import info04 from "@assets/banners/info4.png";
import metodo1 from "@assets/banners/metodo1.png";
import revisao1 from "@assets/banners/revisao1.png";
import try1 from "@assets/banners/try1.png";
import { Wrapper, Content, Block, BlockContainerB, Title, SubTitle, Image } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';

export default function Home() {
  return (
    <Wrapper>
      <Content>
        <Block background={background}>
          <Image src={logo}></Image>
          <Title>Organize seus estudos</Title>
          <SubTitle>Vestibulares, Concursos, Faculdade, Idiomas...</SubTitle>
          <SubTitle>Escontre uma sessão perfeita para seus estudos</SubTitle>
          <SubTitle>ou crie a sua própria!</SubTitle>
          <div className="action">
            <ButtonPrimary content="Acesse Agora!"></ButtonPrimary>
          </div>
        </Block>
        <Block background={backgroundColored}>
          <BlockContainerB>
            <h1>Como Funciona?</h1>

            <div className="items"> 
              <div className="item">
                <img src={info01} />
                <h3>Pesquise</h3>
                <h5>Pesquise por um tema do seu interesse</h5>
              </div>
              <div className="item">
                <img src={info02} />
                <h3>adicione</h3>
                <h5>Adicione um baralho de estudos a sua lista</h5>
              </div>
              <div className="item">
                <img src={info03} />
                <h3>PRONTO!</h3>
                <h5>Uma coleção de cards contendo perguntas e respostas sobre o tema ficará disponível</h5>
              </div>
              <div className="item">
                <img src={info04} />
                <h3>REVISE DIARIAMENTE</h3>
                <h5>Novas perguntas e respostas serão disponibilizadas diariamente.  
Você poderá revisar quantas vezes desejar</h5>
              </div>
            </div>
          </BlockContainerB>
        </Block>
        <Block background={background}>
            <h1>O Método</h1>

            <div className="method">
              <div className="info">
                <h2>Hermann Ebbinghaus</h2>

                <h4>Levantou a hipótese de que a velocidade de esquecimento depende de vários fatores, como a dificuldade do material aprendido, sua representação e outros fatores fisiológicos como estresse e sono. </h4>
                <h4>Descobriu que a informação é mais fácil de lembrar quando é construída sobre coisas que você já conhece, e a curva do esquecimento era achatada a cada repetição. </h4>
                <h4>Parecia que, ao aplicar treinamento frequente na aprendizagem, a informação era solidificada por recordações repetidas.</h4>
              </div>
              <img src={metodo1}/>
            </div>
        </Block>
        <Block background={backgroundColored}>
          <BlockContainerB>
            <h1>Gráfico Aprendizado x Tempo</h1>
            <img className="full-image" src={revisao1}/>
          </BlockContainerB>
        </Block>
        <Block background={background}>
          <h1>Experimente o Memorizador</h1>
          
          <div className="action">
            <ButtonPrimary content="Acesse Agora!"></ButtonPrimary>
            <img className="full-image" src={try1}/>
          </div>
        </Block>
      </Content>
    </Wrapper>
  ); 
}