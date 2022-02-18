import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import ValidationMessage from '@components/validation/ValidationMessage';
import Themes from '@components/forms/addDeck/Themes';
import { initialValues, schema } from '@services/Validation/newDeck.schema';
import { loadNewDeck, saveAction } from '@store/modules/deck/actions';

import { Wrapper, Content, Title, Block, Group, ComboArea, RadioArea, RadioIcon, RadioInfo, RadioTitle, RadioDescription, ComboTitle, FinishArea } from './styles';
import IconMedium from '@components/icons/IconMedium';
import { RootState } from '@store/modules/rootReducer';

export default function AddDeck() {
  const dispatch = useDispatch();
  const { frequency, themes, themeId, defaultFrequency } = useSelector((state:RootState) => state.deck);
  const t = useTranslation();

  useEffect(() => {
    dispatch(loadNewDeck());
  }, [dispatch]);

  function handleSubmit(data) {
    dispatch(saveAction({
      name: data.name,
      description: data.description,
      isPublic: data.isPublic === "public",
      frequencyId: data.frequencyId,
      themeId
    }));
  }

  if (defaultFrequency) {
    initialValues.frequencyId = defaultFrequency;
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
              <Field name={"description"} as="textarea" className="input" placeholder={t('newDeck.name')} />
              <ValidationMessage name="description"/>
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
              <ComboArea>
                <ComboTitle>{t('newDeck.interval')}</ComboTitle>
                
                <Field name={"frequencyId"} as="select" className="frequency">
                  {frequency ? frequency.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>  
                  )) : null}
                </Field>
              </ComboArea>
              
              <Themes themes={themes} />

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