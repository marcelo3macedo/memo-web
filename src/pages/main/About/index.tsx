import React from 'react';

import { Wrapper, Content, Title, Paragraph } from './styles';

export default function About() {
  return (
    <Wrapper>
      <Content>
        <Title>Sobre</Title>
        <Paragraph>O método foi desenvolvido com base nos estudos realizados pelo psicólogo alemão Hermann Ebbinghaus entre 1880 a 1885.</Paragraph>
        <Paragraph>Hermann Ebbinghaus levantou a hipótese de que a velocidade de esquecimento depende de vários fatores, como a dificuldade do material aprendido (por exemplo, quão significativo é), sua representação e outros fatores fisiológicos como estresse e sono. Ele ainda hipotetizou que a taxa de esquecimento basal difere pouco entre os indivíduos. Ele concluiu que a diferença no desempenho pode ser explicada por habilidades de representação mnemônica.</Paragraph>
        <Paragraph>Ele continuou a hipótese de que o treinamento básico em técnicas mnemônicas pode ajudar a superar essas diferenças em parte. Ele afirmou que os melhores métodos para aumentar a força da memória são:</Paragraph>
        <Paragraph>- Melhor representação da memória (por exemplo, com técnicas mnemônicas).</Paragraph>
        <Paragraph>- Repetição baseada na recordação ativa (especialmente repetição periódica).</Paragraph>
        <Paragraph>- Curva de esquecimento com repetição periódica.</Paragraph>
        <Paragraph>Sua premissa era que cada repetição na aprendizagem aumenta o intervalo ótimo antes que a próxima repetição seja necessária (para uma retenção quase perfeita, as repetições iniciais podem precisar ser feitas em alguns dias, mas depois podem ser feitas depois de anos). </Paragraph>
        <Paragraph>Ele descobriu que a informação é mais fácil de lembrar quando é construída sobre coisas que você já conhece, e a curva do esquecimento era achatada a cada repetição. Parecia que, ao aplicar treinamento frequente na aprendizagem, a informação era solidificada por recordações repetidas.</Paragraph>
      </Content>
    </Wrapper>
  ); 
}