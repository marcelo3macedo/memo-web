import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { TitleText } from '@components/elements/texts/title';
import { DifficultyModal } from '@components/modals/difficulty';
import { loadAction } from '@store/modules/activities/actions';
import { RootState } from '@store/modules/rootReducer';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Action, Content, Info, Title, Wrapper } from './styles';

export function Main() {
  const dispatch = useDispatch();
  const { slug } = useParams() as any;
  const { t } = useTranslation();
  const [opened, setOpened] = useState(false);
  const { name, description, levels, failed }: any = useSelector(
    (state: RootState) => state.activities
  );

  useEffect(() => {
    dispatch(loadAction({ slug }));
  }, [dispatch, slug]);

  function startNow() {
    setOpened(true);
  }

  function closeModal() {
    setOpened(false);
  }

  if (failed) return <></>;

  return (
    <Wrapper>
      <Content>
        <Title>
          <TitleText value={name} />
        </Title>
        <Info>
          <SubtitleText value={description} />
        </Info>
        <Action>
          <PrimaryAnimatedButton
            content={t('activities.actions.startNow')}
            action={startNow}
          />
        </Action>
      </Content>
      <DifficultyModal
        show={opened}
        slug={slug}
        levels={levels}
        closeAction={closeModal}
      />
    </Wrapper>
  );
}
