import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import { EnumeratedOptions } from '@components/options/Enumerated';
import { useTranslation } from 'react-i18next';

import { Content, Title, Wrapper } from './styles';

export function QuestionAnswers({ session }: any) {
  const { t } = useTranslation();
  const { question, answer, option1, option2, option3, option4 } =
    session || {};

  if (!session) return <></>;

  const options = [option1, option2, option3, option4];

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={question} />
        </Title>
        <FeaturedText value={t('activities.actions.selectOption')} />
        <EnumeratedOptions options={options} answer={answer} />
      </Content>
    </Wrapper>
  );
}
