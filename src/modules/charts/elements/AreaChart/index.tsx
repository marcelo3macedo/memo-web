import React from 'react';
import Chart from 'react-apexcharts';
import { useTranslation } from 'react-multi-lang';

import { CHART_AREA } from '@constants/Chart';

import { Wrapper, Content, Title } from './styles';

export default function AreaChart({ seriesName, items, height=350, width='100%' }:any) {
  const t = useTranslation()
  const indexes = items.map((r,i) => { return i+1 });
  const data = {
    options: {
      chart: {
        toolbar: {
          show: false
        }
      },
      xaxis: {
        categories: indexes
      },
      yaxis: {
        max: 100,
        min: 0,
        tickAmount: 5
      }
    },
    series: [{
      name: seriesName,
      data: items
    }]
  }

  return (
    <Wrapper>
      <Content>
        <Chart options={data.options} series={data.series} type={CHART_AREA} width={width} height={height} />
        <Title>{t('historic.evolution.lastSessions')}</Title>
      </Content>
    </Wrapper>
  );
}