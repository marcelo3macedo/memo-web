import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import ValidationMessage from '@components/validation/ValidationMessage';
import IconMedium from '@components/icons/IconMedium';
import { initialValues, schema } from '@services/Validation/newDeck.schema';
import { loadOptions, saveAction } from '@store/modules/deck/actions';
import { RootState } from '@store/modules/rootReducer';

import { Wrapper, Content, Title, Block, Group, ComboArea, RadioArea, RadioIcon, RadioInfo, RadioTitle, RadioDescription, FinishArea, InputText } from './styles';
import InputArea from '@components/input/InputArea';
import InputTextArea from '@components/input/InputTextArea';

export default function AddDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { all:frequencies, default: defaultFrequency } = useSelector((state:RootState) => state.frequencies);
  
  useEffect(() => {
    dispatch(loadOptions());  
  }, [dispatch]);

  initialValues.frequencyId = defaultFrequency ? defaultFrequency.id : null;

  function handleSubmit(data) {
    const payload = {
      name: data.name,
      description: data.description,
      isPublic: data.isPublic === "public",
      frequencyId: data.frequencyId
    };
    
    dispatch(saveAction(payload));
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
              <InputText>{t('newDeck.fields.name')}</InputText>
              <InputArea name="name" placeholder={t('newDeck.name')} theme="light"/>
              <ValidationMessage name="name"/>

              <InputText>{t('newDeck.fields.description')}</InputText>
              <InputTextArea name="description" placeholder={t('newDeck.description')} theme="light"/>
              <ValidationMessage name="description"/>

              <ComboArea>
                <InputText>{t('newDeck.interval')}</InputText>
                
                <Field name={"frequencyId"} as="select" className="frequency">
                  {frequencies ? frequencies.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>  
                  )) : null}
                </Field>
              </ComboArea>

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