import { TopHeader } from '@components/header/top';
import { TutorialList } from '@components/lists/tutorials';
import { useTranslation } from 'react-i18next';

import { Content, Wrapper } from './styles';

export function Tutorial() {
  const { t } = useTranslation();
  const tutorials = t('tutorial.list', { returnObjects: true });

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('tutorial.title')}
          description={t('tutorial.subTitle')}
        />
        <TutorialList tutorials={tutorials} />
      </Content>
    </Wrapper>
  );
}
