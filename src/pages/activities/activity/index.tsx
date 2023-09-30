import { QuestionAnswers } from '@components/activities/questionAnswers';

import { Content, Wrapper } from './styles';

export function Activity() {
  const actual = 1,
    total = 10;
  const session = {
    title: 'Qual a capital do Brasil?',
    options: [
      {
        value: 'Brasília'
      },
      {
        value: 'São Paulo'
      },
      {
        value: 'Rio de Janeiro'
      },
      {
        value: 'Minas Gerais'
      }
    ]
  };

  return (
    <Wrapper>
      <Content>
        <QuestionAnswers actual={actual} total={total} session={session} />
      </Content>
    </Wrapper>
  );
}
