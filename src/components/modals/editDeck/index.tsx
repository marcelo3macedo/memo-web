import PrimaryButton from '@components/elements/buttons/Primary';
import { DescriptionsInput } from '@components/elements/input/descriptions';
import { SelectBoxInput } from '@components/elements/input/selection';
import { ValueInput } from '@components/elements/input/values';
import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import IconMedium from '@components/icons/IconMedium';
import { DECK_PRIVATE, DECK_PUBLIC } from '@constants/deckVisibility';
import { Styles } from '@interfaces/elements/inputs/ValueProps';
import { Styles as TextStyles } from '@interfaces/texts/TextProps';
import { initialValues, schema } from '@services/Validation/editSession.schema';
import { editAction } from '@store/modules/deck/actions';
import { RootState } from '@store/modules/rootReducer';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  Action,
  Block,
  BlockTitle,
  CloseArea,
  Container,
  Group,
  Header,
  Item,
  Items,
  Modal,
  RadioArea,
  RadioDescription,
  RadioIcon,
  RadioInfo,
  RadioTitle
} from './styles';

export function EditDeckModal({ deck, show, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { frequencies } = useSelector((state: RootState) => state.frequencies);
  const { name, description, frequencyId, isPublic } = deck;

  function onSubmit(data: any) {
    dispatch(editAction({ ...data, id: deck.id }));
    closeAction();
  }

  if (deck) {
    initialValues.name = name;
    initialValues.description = description;
    initialValues.frequencyId = frequencyId;
    initialValues.visibility = isPublic ? DECK_PUBLIC : DECK_PRIVATE;
  }

  return (
    <Container show={show}>
      <Modal>
        <Header>
          <TitleText value={t('modal.edit')} />
          <CloseArea onClick={closeAction}>
            <IconMedium name={'close'} />
          </CloseArea>
        </Header>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={schema}
          enableReinitialize={true}>
          {({ handleSubmit, handleChange, values, errors }) => (
            <Items>
              <Item>
                <BlockTitle>
                  <FeaturedText value={t('fields.sessionName')} />
                </BlockTitle>
                <Block>
                  <ValueInput
                    value={values.name}
                    placeholder={t('fields.sessionNamePlaceholder')}
                    onChangeText={handleChange('name')}
                    styled={Styles.DarkBorder}
                  />
                </Block>
                <Block>
                  <FeaturedText value={errors.name} styled={TextStyles.Alert} />
                </Block>
              </Item>
              <Item>
                <BlockTitle>
                  <FeaturedText value={t('fields.sessionDescription')} />
                </BlockTitle>
                <Block>
                  <DescriptionsInput
                    value={values.description}
                    placeholder={t('fields.sessionDescriptionPlaceholder')}
                    onChangeText={handleChange('description')}
                    styled={Styles.DarkBorder}
                  />
                </Block>
                <Block>
                  <FeaturedText
                    value={errors.description}
                    styled={TextStyles.Alert}
                  />
                </Block>
              </Item>
              <Item>
                <BlockTitle>
                  <FeaturedText value={t('fields.frequency')} />
                </BlockTitle>
                <Block>
                  <SelectBoxInput
                    name="frequencyId"
                    options={frequencies}
                    value={values.frequencyId}
                    onChange={handleChange('frequencyId')}
                  />
                </Block>
              </Item>
              <Item>
                <BlockTitle>
                  <FeaturedText value={t('fields.visibility')} />
                </BlockTitle>
                <Block>
                  <Group>
                    <Field
                      name={'isPublic'}
                      type="radio"
                      className="input"
                      value="public"
                      checked={values.visibility === 'public'}
                    />
                    <RadioArea>
                      <RadioIcon>
                        <IconMedium name="unlock" />
                      </RadioIcon>
                      <RadioInfo>
                        <RadioTitle>{t('privacy.public')}</RadioTitle>
                        <RadioDescription>
                          {t('privacy.publicDescription')}
                        </RadioDescription>
                      </RadioInfo>
                    </RadioArea>
                  </Group>
                  <Group>
                    <Field
                      name={'isPublic'}
                      type="radio"
                      className="input"
                      value="private"
                      checked={values.visibility === 'private'}
                    />
                    <RadioArea>
                      <RadioIcon>
                        <IconMedium name="lock" />
                      </RadioIcon>
                      <RadioInfo>
                        <RadioTitle>{t('privacy.private')}</RadioTitle>
                        <RadioDescription>
                          {t('privacy.privateDescription')}
                        </RadioDescription>
                      </RadioInfo>
                    </RadioArea>
                  </Group>
                </Block>
              </Item>
              <Item>
                <Action>
                  <PrimaryButton
                    content={t('actions.update')}
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
