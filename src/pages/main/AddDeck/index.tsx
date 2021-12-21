import React from 'react';
import { useDispatch } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import ValidationMessage from '@components/validation/ValidationMessage';
import { initialValues, schema } from '@services/Validation/newDeck.schema';
import { saveAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Title, Block, Group, RadioArea, RadioIcon, RadioInfo, RadioTitle, RadioDescription, FinishArea } from './styles';
import IconMedium from '@components/icons/IconMedium';

export default function AddDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();

  function handleSubmit(data) {
    dispatch(saveAction({
      name: data.name,
      isPublic: data.isPublic === "public"
    }));
  }

  return (
    <Wrapper>
      <Content>
        <Title>{t('newDeck.title')}</Title>
        <Formik 
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={schema}>
          <Form>
            <Block>
              <Field name={"name"} type="text" className="input" placeholder={t('newDeck.name')} />
              <ValidationMessage name="name"/>
              <Group>
                <Field name={"isPublic"} type="radio" className="input" value="public" />
                <RadioArea>
                  <RadioIcon>
                    <IconMedium name="unlock" />
                  </RadioIcon>
                  <RadioInfo>
                    <RadioTitle>{t('privacy.public')}</RadioTitle>
                    <RadioDescription>{t('privacy.publicDescription')}</RadioDescription>
                  </RadioInfo>
                </RadioArea>
              </Group>
              <Group>
                <Field name={"isPublic"} type="radio" className="input" value="private" />
                <RadioArea>
                  <RadioIcon>
                    <IconMedium name="lock" />
                  </RadioIcon>
                  <RadioInfo>
                    <RadioTitle>{t('privacy.private')}</RadioTitle>
                    <RadioDescription>{t('privacy.privateDescription')}</RadioDescription>
                  </RadioInfo>
                </RadioArea>
              </Group>
              <FinishArea>
                <ButtonPrimary type="submit" content={t('newDeck.save')}/>
              </FinishArea>
            </Block>
          </Form>
        </Formik>
      </Content>
    </Wrapper>
  ); 
}