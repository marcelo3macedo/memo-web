import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { backAction } from '@store/modules/activities/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { BackAction, Content, Wrapper } from './styles';

export function ActivityFinished() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { sessions }: any = useSelector((state: RootState) => state.activities);

  if (!sessions) return <></>;

  function goBack() {
    dispatch(backAction());
  }

  return (
    <Wrapper>
      <Content>
        <BackAction>
          <SecondaryAnimatedButton
            content={t('activities.actions.back')}
            action={goBack}
          />
        </BackAction>
      </Content>
    </Wrapper>
  );
}
