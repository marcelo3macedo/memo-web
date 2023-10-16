import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { UserNameModal } from '@components/modals/userName';
import { startAction } from '@store/modules/activities/actions';
import { RootState } from '@store/modules/rootReducer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Action, Content, Info, Title, Wrapper } from './styles';

export function Main() {
  const dispatch = useDispatch();
  const { slug } = useParams() as any;
  const { t } = useTranslation();
  const basePath = `activities.${slug}`;
  const [opened, setOpened] = useState(false);
  const { name }: any = useSelector((state: RootState) => state.activities);

  function startNow() {
    if (!name) {
      setOpened(true);
      return;
    }

    dispatch(startAction({ slug, name }));
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
            content={t('activities.actions.startNow')}
            action={startNow}
          />
        </Action>
      </Content>
      <UserNameModal show={opened} slug={slug} closeAction={closeModal} />
    </Wrapper>
  );
}
