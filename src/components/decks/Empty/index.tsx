import ButtonPrimary from '@components/button/ButtonPrimary';
import IconLarge from '@components/icons/IconLarge';
import { useTranslation } from 'react-multi-lang';

import { Actions, Content, Title, Wrapper } from './styles';

export default function Empty({ action = null }: any) {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <IconLarge name='alert' />
        <Title>{t('decks.empty')}</Title>
        <Actions>
          <ButtonPrimary content={t('decks.create')} action={action} />
        </Actions>
      </Content>
    </Wrapper>
  );
}
