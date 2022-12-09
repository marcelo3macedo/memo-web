import React from 'react';
import { useTranslation } from 'react-multi-lang';
import PlanPix from '../PlanPix';

import { Wrapper, Container, Title, Options, Option, OptionName } from "./styles";

export default function PlanPayment() {
  const t = useTranslation()

  return (
    <Wrapper>
        <Container>
            <Title>{t('plans.payment.title')}</Title>

            <Options>
              <Option>
                <OptionName>{t('planOptions.type.pix')}</OptionName>
              </Option>
            </Options>

            <PlanPix/>
        </Container>
    </Wrapper>
  );
}