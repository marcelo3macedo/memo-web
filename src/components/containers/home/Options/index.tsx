import Option from '@components/actions/Option';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content } from './styles';

export default function Options() {
  const t = useTranslation();

  return (
    <Wrapper>
      <Content>
        <Option
          title={t('options.search')}
          subTitle={t('options.inGallery')}
          icon={'gallery'}
        />
        <Option
          title={t('options.create')}
          subTitle={t('options.newSession')}
          icon={'new'}
          template={'cold'}
        />
      </Content>
    </Wrapper>
  );
}
