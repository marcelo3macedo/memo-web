import PrimaryButton from '@components/elements/buttons/Primary';
import { DescriptionsInput } from '@components/elements/input/descriptions';
import { ValueInput } from '@components/elements/input/values';
import { FeaturedText } from '@components/elements/texts/featured';
import { TitleText } from '@components/elements/texts/title';
import IconMedium from '@components/icons/IconMedium';
import { Styles } from '@interfaces/elements/inputs/ValueProps';
import { Styles as TextStyles } from '@interfaces/texts/TextProps';
import { initialValues, schema } from '@services/Validation/editCard.schema';
import { updateAction } from '@store/modules/card/actions';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';

import {
  Action,
  Block,
  BlockTitle,
  CloseArea,
  Container,
  Header,
  Item,
  Items,
  Modal
} from './styles';

export function EditCardModal({ show, card, closeAction }: any) {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  function onSubmit(data: any) {
    const updatedCard = {
      id: card.id,
      title: data.title,
      content: data.content,
      secretContent: data.secretContent
    };

    dispatch(updateAction(updatedCard));
    closeAction();
  }

  if (card) {
    initialValues.title = card.title;
    initialValues.content = card.content;
    initialValues.secretContent = card.secretContent;
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
                  <FeaturedText value={t('fields.title')} />
                </BlockTitle>
                <Block>
                  <ValueInput
                    value={values.title}
                    placeholder={t('fields.titlePlaceholder')}
                    onChangeText={handleChange('title')}
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
                <BlockTitle>
                  <FeaturedText value={t('fields.content')} />
                </BlockTitle>
                <Block>
                  <ValueInput
                    value={values.content}
                    placeholder={t('fields.contentPlaceholder')}
                    onChangeText={handleChange('content')}
                    styled={Styles.DarkBorder}
                  />
                </Block>
                <Block>
                  <FeaturedText
                    value={errors.content}
                    styled={TextStyles.Alert}
                  />
                </Block>
              </Item>
              <Item>
                <BlockTitle>
                  <FeaturedText value={t('fields.secretContent')} />
                </BlockTitle>
                <Block>
                  <DescriptionsInput
                    value={values.secretContent}
                    placeholder={t('fields.secretContentPlaceholder')}
                    onChangeText={handleChange('secretContent')}
                    styled={Styles.DarkBorder}
                  />
                </Block>
                <Block>
                  <FeaturedText
                    value={errors.secretContent}
                    styled={TextStyles.Alert}
                  />
                </Block>
              </Item>
              <Item>
                <Action>
                  <PrimaryButton
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
