import PrimaryButton from '@components/elements/buttons/Primary';
import { DescriptionsInput } from '@components/elements/input/descriptions';
import { SelectBoxInput } from '@components/elements/input/selection';
import { ValueInput } from '@components/elements/input/values';
import { FeaturedText } from '@components/elements/texts/featured';
import { HeaderText } from '@components/elements/texts/header';
import { TopHeader } from '@components/header/top';
import IconMedium from '@components/icons/IconMedium';
import { DECK_PUBLIC } from '@constants/deckVisibility';
import { Styles as InputStyle } from '@interfaces/elements/inputs/ValueProps';
import { Styles } from '@interfaces/texts/TextProps';
import {
  initialValues,
  schema
} from '@services/Validation/createSession.schema';
import { saveAction } from '@store/modules/deck/actions';
import { loadAction } from '@store/modules/frequencies/actions';
import { RootState } from '@store/modules/rootReducer';
import { Field, Formik } from 'formik';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';

import {
  Content,
  Group,
  Item,
  ItemFooter,
  Items,
  RadioArea,
  RadioDescription,
  RadioIcon,
  RadioInfo,
  RadioTitle,
  Row,
  Wrapper
} from './styles';

export function CreateSession() {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { frequencies } = useSelector((state: RootState) => state.frequencies);

  useEffect(() => {
    dispatch(loadAction());
  }, [dispatch]);

  function onSubmit(data: any) {
    const deck = {
      name: data.name,
      description: data.description,
      isPublic: data.visibility === DECK_PUBLIC,
      frequencyId: data.frequency || frequencies[0].id
    };

    dispatch(saveAction(deck));
  }

  return (
    <Wrapper>
      <Content>
        <TopHeader
          title={t('create.title')}
          description={t('create.subTitle')}
        />

        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          validateOnChange={false}
          onSubmit={onSubmit}>
          {({ handleSubmit, handleChange, values, errors }) => (
            <Items>
              <Item>
                <Row>
                  <HeaderText value={t('fields.sessionName')} />
                </Row>
                <ValueInput
                  value={values.name}
                  placeholder={t('fields.sessionNamePlaceholder')}
                  onChangeText={handleChange('name')}
                  styled={InputStyle.DarkBorder}
                />
                <Row>
                  <FeaturedText value={errors.name} styled={Styles.Alert} />
                </Row>
              </Item>
              <Item>
                <Row>
                  <HeaderText value={t('fields.sessionDescription')} />
                </Row>
                <DescriptionsInput
                  value={values.description}
                  placeholder={t('fields.sessionDescriptionPlaceholder')}
                  onChangeText={handleChange('description')}
                  styled={InputStyle.DarkBorder}
                />
                <Row>
                  <FeaturedText
                    value={errors.description}
                    styled={Styles.Alert}
                  />
                </Row>
              </Item>
              <Item>
                <Row>
                  <HeaderText value={t('fields.frequency')} />
                </Row>
                <SelectBoxInput
                  name="frequency"
                  options={frequencies}
                  onChange={handleChange('frequency')}
                />
              </Item>
              <Item>
                <Row>
                  <HeaderText value={t('fields.visibility')} />
                </Row>
                <Group>
                  <Field
                    name={'isPublic'}
                    type="radio"
                    className="input"
                    value="public"
                    onChange={handleChange('visibility')}
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
                    onChange={handleChange('visibility')}
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
              </Item>
              <ItemFooter>
                <PrimaryButton
                  content={t('actions.save')}
                  action={handleSubmit}
                />
              </ItemFooter>
            </Items>
          )}
        </Formik>
      </Content>
    </Wrapper>
  );
}
