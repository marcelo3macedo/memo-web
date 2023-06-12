import IconMedium from '@components/icons/IconMedium';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Details, Action, ActionName } from './styles';

export default function CardOptions() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Details>{t('review.details')}</Details>
        <Action>
          <IconMedium name={'flip'} />
          <ActionName>{t('review.seeResults')}</ActionName>
        </Action>
      </Content>
    </Wrapper>
  );
}
