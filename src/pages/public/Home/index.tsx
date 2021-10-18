import React from 'react';
import { useDispatch } from 'react-redux';

import background from "@assets/banners/background.png";
import backgroundColored from "@assets/banners/backgroundColored.png";
import project1 from "@assets/banners/project1.png";
import project2 from "@assets/banners/project2.png";
import info01 from "@assets/banners/info1.png";
import info02 from "@assets/banners/info2.png";
import info03 from "@assets/banners/info3.png";
import info04 from "@assets/banners/info4.png";
import metodo1 from "@assets/banners/metodo1.png";
import revisao1 from "@assets/banners/revisao1.png";
import try1 from "@assets/banners/try1.png";
import { Wrapper, Content, Block, BlockContainerB, Title, SubTitle, Image } from './styles';
import ButtonPrimary from '@components/button/ButtonPrimary';
import { navigatePush } from '@store/modules/navigate/actions';
import { PATH_SIGN_IN } from '@services/Navigation';

export default function Home() {
  const dispatch = useDispatch();
  
  function signIn() {
    dispatch(navigatePush({ path: PATH_SIGN_IN }));
  }

  return (
    <Wrapper>
      <Content>
        <Block backgroundColor="#f8f8f8">
          <div className="block-container">
            <div className="block-text-group">
              <h1>Destaque-se,</h1>
              <h1>Vestibulares,</h1>
              <h1>Concursos,</h1>
              <h1>Escola ou Faculdade</h1>

              <div className="block-subinfo">
                <h4>Utilize o memo</h4>
                <h4>como seu parceiro de estudos</h4>
              </div>

              <div className="block-actions">
                <ButtonPrimary content="Acesse agora!" action={signIn}></ButtonPrimary>
              </div>
            </div>
            <div className="block-image">
              <img src={project1}/>
            </div>
          </div>
        </Block>

        <Block backgroundColor="#c8f8ff">
          <div className="block-container type2">
            <div className="block-image">
              <img src={project2}/>
            </div>
            <div className="block-text-group">
              <h1>Utilize a técnica</h1>
              <h1>de repetição</h1>
              <h1>espaçada e</h1>
              <h1>fixe o</h1>
              <h1>conteúdo</h1>
            </div>
          </div>
        </Block>

        <Block backgroundColor="#1ae2ff">
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
        
        <Block backgroundColor="#f8f8f8">          
            <div className="method">
              <h1>O Método</h1>

              <div className="info">
                <h2>Hermann Ebbinghaus</h2>

                <h4>Levantou a hipótese de que a velocidade de esquecimento depende de vários fatores, como a dificuldade do material aprendido, sua representação e outros fatores fisiológicos como estresse e sono. </h4>
                <h4>Descobriu que a informação é mais fácil de lembrar quando é construída sobre coisas que você já conhece, e a curva do esquecimento era achatada a cada repetição. </h4>
                <h4>Parecia que, ao aplicar treinamento frequente na aprendizagem, a informação era solidificada por recordações repetidas.</h4>
              </div>
              <img src={metodo1}/>
            </div>
        </Block>
        <Block backgroundColor="#c8f8ff">          
          <div className="action">
            <h1>Experimente o Memorizador</h1>
          
            <ButtonPrimary content="Acesse Agora!" action={signIn}></ButtonPrimary>
            <img className="full-image" src={try1}/>
          </div>
        </Block>
      </Content>
    </Wrapper>
  ); 
}