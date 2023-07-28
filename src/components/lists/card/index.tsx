import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { useTranslation } from 'react-i18next';
import { useTheme } from 'styled-components';

import { Action, Card, Content, Description, Wrapper } from './styles';

export function CardItem({ card }: any) {
  const { t } = useTranslation();

  if (!card) {
    return <></>;
  }
  const { title, content } = card;
  const detailedTitle = `${t('card.title')}: ${title}`;
  const theme = useTheme() as any;

  return (
    <Wrapper>
      <Content>
        <Card>
          <SubtitleText value={detailedTitle} />
          <Description>
            <FeaturedText value={content} />
          </Description>
        </Card>
        <Action>
          <IconMedium name="delete" style={{ fill: theme.GRAY_COLOR }} />
        </Action>
      </Content>
    </Wrapper>
  );
}
