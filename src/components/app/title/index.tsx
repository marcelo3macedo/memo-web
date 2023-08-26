import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { useTranslation } from 'react-i18next';

import { Content, SubTitle, Title, Wrapper } from './styles';

export function TitleApp() {
  const { t } = useTranslation();
  const name = 'Marcelo';
  const title = `${t('home.title')} ${name}`;

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={title} />
        </Title>
        <SubTitle>
          <SubtitleText value={t('home.subTitle')} />
        </SubTitle>
      </Content>
    </Wrapper>
  );
}
