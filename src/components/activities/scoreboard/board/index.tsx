import { HeaderText } from '@components/elements/texts/header';
import { SubtitleText } from '@components/elements/texts/subtitle';

import { Column, Content, Header, Line, Title, Wrapper } from './styles';

export function Board({ scores }: any) {
  if (!scores || scores.length === 0) {
    return (
      <Title>
        <SubtitleText value={'Nenhuma pontuação recebida'} />
      </Title>
    );
  }

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
        {scores.map((s, i) => (
          <Line key={i}>
            <Column>
              <HeaderText value={i + 1} />
            </Column>
            <Column>
              <HeaderText value={s.name} />
            </Column>
            <Column>
              <HeaderText value={s.score} />
            </Column>
          </Line>
        ))}
      </Content>
    </Wrapper>
  );
}
