import PrimaryAnimatedButton from '@components/elements/buttons/PrimaryAnimated';
import { ValueAnimatedInput } from '@components/elements/input/valuesAnimated';
import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import { Styles } from '@interfaces/elements/inputs/ValueProps';
import { Styles as TextStyles } from '@interfaces/texts/TextProps';
import { initialValues, schema } from '@services/Validation/yourName.schema';
import { startAction } from '@store/modules/activities/actions';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import { Action, Block, Container, Header, Item, Items, Modal } from './styles';

export function UserNameModal({ show, slug, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function onSubmit(data: any) {
    const { name } = data;
    closeAction();
    dispatch(startAction({ slug, name }));
  }

  return (
    <Container show={show}>
      <Modal>
        <Header>
          <TitleText value={t('activities.yourName')} />
        </Header>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
          enableReinitialize={true}>
          {({ handleSubmit, handleChange, values, errors }) => (
            <Items>
              <Item>
                <Block>
                  <ValueAnimatedInput
                    value={values.title}
                    placeholder={t('fields.namePlaceholder')}
                    onChangeText={handleChange('name')}
                    styled={Styles.DarkBorder}
                  />
                </Block>
                <Block>
                  <FeaturedText
                    value={errors.title}
                    styled={TextStyles.Alert}
                  />
                </Block>
              </Item>
              <Item>
                <Action>
                  <PrimaryAnimatedButton
                    content={t('actions.save')}
                    action={handleSubmit}
                  />
                </Action>
              </Item>
            </Items>
          )}
        </Formik>
      </Modal>
    </Container>
  );
}
