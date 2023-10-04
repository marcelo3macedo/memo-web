import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { MessageTypeModal } from '@components/modals/messageType';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

import { Action, Content, Info, Title, Wrapper } from './styles';

export function Main() {
  const [opened, setOpened] = useState(false);
  const { t } = useTranslation();
  const { slug } = useParams() as any;
  const basePath = `messages.${slug}`;

  function startNow() {
    setOpened(true);
  }

  function closeModal() {
    setOpened(false);
  }

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={t(`${basePath}.title`)} />
        </Title>
        <Info>
          <SubtitleText value={t(`${basePath}.description`)} />
        </Info>
        <Action>
          <PrimaryAnimatedButton
            content={t('activities.actions.seeMessages')}
            action={startNow}
          />
        </Action>
      </Content>
      <MessageTypeModal show={opened} slug={slug} closeAction={closeModal} />
    </Wrapper>
  );
}
