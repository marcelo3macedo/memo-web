import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from 'react-multi-lang';
import { Formik, Form, Field } from "formik";

import ButtonPrimary from '@components/button/ButtonPrimary';
import ValidationMessage from '@components/validation/ValidationMessage';
import Themes from '@components/forms/addDeck/Themes';
import IconMedium from '@components/icons/IconMedium';
import { initialValues, schema } from '@services/Validation/newDeck.schema';
import { loadOptions, saveAction } from '@store/modules/deck/actions';
import { RootState } from '@store/modules/rootReducer';
import { selectThemeAction } from '@store/modules/themes/actions';

import { Wrapper, Content, Title, Block, Group, ComboArea, RadioArea, RadioIcon, RadioInfo, RadioTitle, RadioDescription, ComboTitle, FinishArea } from './styles';

export default function AddDeck() {
  const dispatch = useDispatch();
  const t = useTranslation();
  const { all:themes, selected: themeSelected } = useSelector((state:RootState) => state.themes);
  const { all:frequencies, default: defaultFrequency } = useSelector((state:RootState) => state.frequencies);
  
  useEffect(() => {
    dispatch(loadOptions());  
  }, [dispatch]);

  if (!themes || themes.length === 0 || !frequencies || frequencies.length === 0) {
    return <></>;
  }

  initialValues.themeId = themeSelected || themes[0].id;
  initialValues.frequencyId = defaultFrequency ? defaultFrequency.id : null;

  function handleSubmit(data) {
    const payload = {
      name: data.name,
      description: data.description,
      isPublic: data.isPublic === "public",
      frequencyId: data.frequencyId,
      themeId: themeSelected
    };
    
    dispatch(saveAction(payload));
  }

  function changeThemeSelected({ themeId }) {
    dispatch(selectThemeAction({ themeId}));
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
                  {frequencies ? frequencies.map(f => (
                    <option key={f.id} value={f.id}>{f.name}</option>  
                  )) : null}
                </Field>
              </ComboArea>
              
              <Themes themes={themes} selected={initialValues.themeId} action={changeThemeSelected} />

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