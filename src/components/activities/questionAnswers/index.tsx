import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import { EnumeratedOptions } from '@components/options/Enumerated';
import { getMessage } from '@helpers/BreadcrumbHelper';
import { useTranslation } from 'react-i18next';

import { BackAction, Breadcrumb, Content, Title, Wrapper } from './styles';

export function QuestionAnswers({ actual, total, session }: any) {
  const { t } = useTranslation();
  const breadcrumbMessage = getMessage(t, actual, total);

  function goBack() {
    console.log('go back...');
  }

  if (!session) return <></>;

  return (
    <Wrapper>
      <Content>
        <BackAction>
          <SecondaryAnimatedButton
            content={t('activities.actions.back')}
            action={goBack}
          />
        </BackAction>
        <Breadcrumb>
          <FeaturedText value={breadcrumbMessage} />
        </Breadcrumb>
        <Title>
          <TitleText value={session.title} />
        </Title>
        <FeaturedText value={t('activities.actions.selectOption')} />
        <EnumeratedOptions options={session.options} />
      </Content>
    </Wrapper>
  );
}
