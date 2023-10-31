import PrimaryButton from '@components/elements/buttons/Primary';
import InputText from '@components/elements/input/Text';
import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import { initialValues, schema } from '@services/Validation/setScore.schema';
import { saveScore } from '@store/modules/activities/actions';
import { Form, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import {
  Action,
  Body,
  Container,
  Fields,
  Footer,
  Header,
  Modal
} from './styles';

export function RankingModal({ show, points }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const finalScore = t('activityFinished.finalScore').replaceAll(
    '{{points}}',
    points
  );

  function handleSubmit(data) {
    const { name } = data || {};
    dispatch(saveScore({ name, points }));
  }

  return (
    <Container show={show}>
      <Modal>
        <Header>
          <TitleText value={t('activityFinished.hitScore')} />
        </Header>
        <Body>
          <FeaturedText value={finalScore} />
        </Body>
        <Footer>
          <FeaturedText value={t('activityFinished.sayYourName')} />

          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={schema}>
            <Form>
              <Fields>
                <InputText name="name" />
              </Fields>
              <Action>
                <PrimaryButton
                  type="submit"
                  content={t('activityFinished.rankingAction')}
                />
              </Action>
            </Form>
          </Formik>
        </Footer>
      </Modal>
    </Container>
  );
}
