import PrimaryButton from '@components/elements/buttons/Primary';
import { DescriptionsInput } from '@components/elements/input/descriptions';
import { SelectBoxInput } from '@components/elements/input/selection';
import { ValueInput } from '@components/elements/input/values';
import { FeaturedText } from '@components/elements/texts/featured';
import { HeaderText } from '@components/elements/texts/header';
import { TopHeader } from '@components/header/top';
import IconMedium from '@components/icons/IconMedium';
import { Styles as InputStyle } from '@interfaces/elements/inputs/ValueProps';
import { Styles } from '@interfaces/texts/TextProps';
import {
  initialValues,
  schema
} from '@services/Validation/createSession.schema';
import { Field, Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import {
  Content,
  Group,
  Item,
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
  const { t } = useTranslation();
  const frequencies = [
    { id: 1, name: 'teste ' },
    { id: 2, name: 'teste 2' }
  ];

  function onSubmit(data: any) {
    console.log(data);
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
                  <HeaderText value={t('fields.visibility')} />
                </Row>
                <Group>
                  <Field
                    name={'isPublic'}
                    type="radio"
                    className="input"
                    value="public"
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
                <PrimaryButton
                  content={t('actions.save')}
                  action={handleSubmit}
                />
              </Item>
            </Items>
          )}
        </Formik>
      </Content>
    </Wrapper>
  );
}
