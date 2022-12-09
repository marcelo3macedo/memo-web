import React from 'react';
import { useTranslation } from 'react-multi-lang';

import IconMedium from '@components/icons/IconMedium';

import { Wrapper, Container, Header, Body, Description, Option, Item, Title } from "./styles"

export default function PlansFeatures() {
  const t = useTranslation()

  return (
    <Wrapper>
        <Container>
            <Title>{t('plans.advantages')}</Title>
            <Header>
                <Description></Description>
                <Option>{t('plans.type.standard')}</Option>
                <Option>{t('plans.type.pro')}</Option>
            </Header>
            <Body>
                <Item>
                    <Description>{t('plans.features.simultaneos')}</Description>
                    <Option>10</Option>
                    <Option>Ilimitado</Option>
                </Item>
                <Item>
                    <Description>{t('plans.features.cardsPerSession')}</Description>
                    <Option>100</Option>
                    <Option>Ilimitado</Option>
                </Item>
                <Item>
                    <Description>{t('plans.features.ads')}</Description>
                    <Option><IconMedium name="close" /></Option>
                    <Option><IconMedium name="ok" /></Option>
                </Item>
                <Item>
                    <Description>{t('plans.features.integration')}</Description>
                    <Option><IconMedium name="close" /></Option>
                    <Option><IconMedium name="ok" /></Option>
                </Item>
                <Item>
                    <Description>{t('plans.features.evolution')}</Description>
                    <Option><IconMedium name="close" /></Option>
                    <Option><IconMedium name="ok" /></Option>
                </Item>
            </Body>
        </Container>
    </Wrapper>
  );
}