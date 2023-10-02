import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import { EnumeratedOptions } from '@components/options/Enumerated';
import { useTranslation } from 'react-i18next';

import { Content, Title, Wrapper } from './styles';

export function QuestionAnswers({ session }: any) {
  const { t } = useTranslation();

  if (!session) return <></>;

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={session.question} />
        </Title>
        <FeaturedText value={t('activities.actions.selectOption')} />
        <EnumeratedOptions options={session.options} answer={session.answer} />
      </Content>
    </Wrapper>
  );
}
