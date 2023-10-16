import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { FeaturedText } from '@components/elements/texts/featured';
import { getContentForMessages } from '@helpers/BreadcrumbHelper';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Back } from '../back';
import { Front } from '../front';

import { BackAction, Breadcrumb, Card, Content, Wrapper } from './styles';

export function MessageComplete({ actual, total, session }: any) {
  const { t } = useTranslation();
  const breadcrumbMessage = getContentForMessages(t, actual, total);
  const [opened, setOpened] = useState(false);

  function goBack() {
    console.log('go back...');
  }

  function updateOpened() {
    setOpened(!opened);
  }

  function generateCard() {
    return opened ? (
      <Back session={session} />
    ) : (
      <Front action={updateOpened} session={session} />
    );
  }

  if (!session) return <></>;

  return (
    <Wrapper>
      <Content>
        <BackAction>
          <SecondaryAnimatedButton
            content={t('activities.actions.back')}
            action={goBack}
          />
        </BackAction>
        <Breadcrumb>
          <FeaturedText value={breadcrumbMessage} />
        </Breadcrumb>
        <Card>{generateCard()}</Card>
      </Content>
    </Wrapper>
  );
}
