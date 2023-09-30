import { HeaderText } from '@components/elements/texts/header';

import { Column, Content, Header, Line, Wrapper } from './styles';

export function Board({ score }: any) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <Column>
            <HeaderText value={'Posição'} />
          </Column>
          <Column>
            <HeaderText value={'Nome'} />
          </Column>
          <Column>
            <HeaderText value={'Pontuação'} />
          </Column>
        </Header>
        {score.map((s, i) => (
          <Line key={i}>
            <Column>
              <HeaderText value={i + 1} />
            </Column>
            <Column>
              <HeaderText value={s.name} />
            </Column>
            <Column>
              <HeaderText value={s.points} />
            </Column>
          </Line>
        ))}
      </Content>
    </Wrapper>
  );
}
