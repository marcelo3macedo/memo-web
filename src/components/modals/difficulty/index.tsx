import { TitleText } from '@components/elements/texts/title';
import { ActionLevel } from '@components/levels/action';
import { startAction } from '@store/modules/activities/actions';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Body, Container, Header, Level, Modal } from './styles';

export function DifficultyModal({ slug, show, levels, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function levelAction(level) {
    dispatch(startAction({ slug, level }));
    closeAction();
  }

  function loadLevels() {
    if (!levels || !Array.isArray(levels)) return <></>;

    return levels.map((l, i) => (
      <Level key={i}>
        <ActionLevel
          content={l}
          action={() => {
            levelAction(l);
          }}
        />
      </Level>
    ));
  }

  return (
    <Container show={show}>
      <Modal>
        <Header>
          <TitleText value={t('activities.difficulty')} />
        </Header>
        <Body>{loadLevels()}</Body>
      </Modal>
    </Container>
  );
}
