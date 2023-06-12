import { formatStringAsArray } from '@helpers/ArrayHelper';
import AreaChart from '@modules/charts/elements/AreaChart';
import React from 'react';
import { useTranslation } from 'react-multi-lang';

import { Wrapper, Content, Title, ChartArea } from './styles';

export default function RetentionEvolution({ historic }: any) {
  const t = useTranslation();

  if (!historic || !historic.lastRetentions) {
    return <></>;
  }

  const items = formatStringAsArray(historic.lastRetentions);

  return (
    <Wrapper>
      <Content>
        <Title>{t('evolution.title')}</Title>
        <ChartArea>
          <AreaChart items={items} seriesName={'% Retenção'} />
        </ChartArea>
      </Content>
    </Wrapper>
  );
}
