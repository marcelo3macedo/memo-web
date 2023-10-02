import { QuestionAnswers } from '@components/activities/questionAnswers';
import SecondaryAnimatedButton from '@components/elements/buttons/SecondaryAnimated';
import { FeaturedText } from '@components/elements/texts/featured';
import { ValidationCheck } from '@components/validation/check';
import { getMessage } from '@helpers/BreadcrumbHelper';
import { backAction } from '@store/modules/activities/actions';
import { RootState } from '@store/modules/rootReducer';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import { BackAction, Body, Breadcrumb, Content, Wrapper } from './styles';

export function Activity() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { sessions, activeIndex, isCorrect, validated }: any = useSelector(
    (state: RootState) => state.activities
  );
  const actual = activeIndex + 1;
  const session = sessions[activeIndex];
  const breadcrumbMessage = getMessage(t, actual, sessions.length);

  if (!sessions) return <></>;

  function goBack() {
    dispatch(backAction());
  }

  function generateActivity() {
    if (validated) return <ValidationCheck isCorrect={isCorrect} />;

    return <QuestionAnswers actual={actual} session={session} />;
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
        <Breadcrumb>
          <FeaturedText value={breadcrumbMessage} />
        </Breadcrumb>
        <Body>{generateActivity()}</Body>
      </Content>
    </Wrapper>
  );
}
