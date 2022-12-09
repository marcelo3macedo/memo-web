import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-multi-lang';

import ButtonPrimary from '@components/button/ButtonPrimary';
import { PATH_PLANS } from '@services/Navigation';
import { RootState } from '@store/modules/rootReducer';
import { navigatePush } from '@store/mods/navigate/actions';

import { Wrapper, Container, Title, Options, Option, OptionTitle, OptionValue } from "./styles";

export default function PlansOptions() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const { plans } = useSelector((state:RootState) => state.plans)
  const options = plans.reduce((a, o) => (o.options.map(oa => a.push(oa) ), a), [])

  function getTypeName(price) {
    return `R$ ${price}`
  }

  function openOption(name) {
    dispatch(navigatePush({ path: `${PATH_PLANS}/${name}` }))
  }

  return (
    <Wrapper>
        <Container>
            <Title>{t('plans.options.sign')}</Title>

            <Options>
              {options.map((o,i) => (
                <Option key={i}>
                  <OptionTitle>{ o.name }</OptionTitle>
                  <OptionValue>{ getTypeName(o.price) }</OptionValue>
                  <ButtonPrimary action={() => { openOption(o.name) }} content={t('plans.options.get')} />
                </Option>
              ))}
            </Options>
        </Container>
    </Wrapper>
  );
}