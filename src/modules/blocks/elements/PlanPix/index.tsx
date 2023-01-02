import React, { useState } from 'react';
import { useTranslation } from 'react-multi-lang';
import { useDispatch, useSelector } from 'react-redux';

import PixCode from '../PixCode';
import ButtonPrimary from '@components/button/ButtonPrimary';
import BlockLoading from '@modules/loading/elements/BlockLoading';
import { RootState } from '@store/modules/rootReducer';
import { paymentAction } from '@store/mods/planOptions/actions';

import { Wrapper, Container, Title, Subtitle, Steps, Info, InfoInput, InfoTitle, Total, Value, ValueDescription, InfoErrorMessage } from "./styles";

export default function PlanPix() {
  const t = useTranslation()
  const dispatch = useDispatch()
  const [ document, setDocument ] = useState("");
  const { option, loading, failed, payment } = useSelector((state:RootState) => state.planOptions)
  
  function getTypeName(price) {
    return `R$ ${price}`
  }

  function paymentClick() {
    dispatch(paymentAction({ document, option }))
  }

  return (
    <Wrapper>
        <Container>
            <Title>{t('planOptions.pix.title')}</Title>
            {t('planOptions.pix.subtitle').split("|").map((v, index) =>(
              <Subtitle key={index}>{v}</Subtitle>
            ))}
            <Steps>
              {t('planOptions.pix.steps').split("|").map((v, index) =>(
                <Subtitle key={index}>{v}</Subtitle>
              ))}
            </Steps>
            <Info>
              <InfoTitle>{t('planOptions.pix.infoTitle')}</InfoTitle>
              <InfoInput onChange={e=> setDocument(e.target.value)}  />
              { failed ? <InfoErrorMessage>{t('planOptions.pix.error')}</InfoErrorMessage> : <></> }
              <ButtonPrimary content={t('planOptions.pix.payment')} action={paymentClick} />
            </Info>
            <BlockLoading loading={loading} />
            { payment ? <PixCode payment={payment} /> : <></>}
            <Total>
              <Value>{getTypeName(option.price)}</Value>
              <ValueDescription>{t('planOptions.pix.value')}</ValueDescription>
            </Total>
        </Container>
    </Wrapper>
  );
}