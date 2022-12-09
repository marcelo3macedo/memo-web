import React from 'react';
import { useTranslation } from 'react-multi-lang';
import QrCode from 'react-qrcode-svg';

import { Wrapper, Container, Title, CodeArea, Subtitle, Steps, Info, CodeText, CodeTextInfo, CodeInputInfo } from "./styles";

export default function PixCode({ payment }) {
  const t = useTranslation()

  console.log(payment)

  return (
    <Wrapper>
        <Container>
          <Title>{t('planOptions.pix.payNow')}</Title>

          <CodeArea>
            <QrCode data={payment.qrCodeUrl} height="200" width="200" />
            <Info>
              {t('planOptions.pix.subtitle').split("|").map((v, index) =>(
                <Subtitle key={index}>{v}</Subtitle>
              ))}
              <Steps>
                {t('planOptions.pix.steps').split("|").map((v, index) =>(
                  <Subtitle key={index}>{v}</Subtitle>
                ))}
              </Steps>
            </Info>
          </CodeArea>

          <CodeText>
            <CodeTextInfo>{t('planOptions.pix.useCode')}</CodeTextInfo>
            <CodeInputInfo value={payment.code} />
          </CodeText>
        </Container>
    </Wrapper>
  );
}