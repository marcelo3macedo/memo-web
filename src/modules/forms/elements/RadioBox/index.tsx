import IconMedium from '@components/icons/IconMedium';
import IRadioBox from '@modules/forms/dtos/IRadioBox';
import { Field } from 'formik';
import React from 'react';

import {
  Wrapper,
  Content,
  RadioArea,
  RadioIcon,
  RadioInfo,
  RadioTitle,
  RadioDescription,
} from './styles';

export default function RadioBox({ name, options }: IRadioBox) {
  return (
    <Wrapper>
      {options ? (
        options.map((f, i) => (
          <Content key={i}>
            <Field name={name} type='radio' className='input' value={f.value} />
            <RadioArea>
              <RadioIcon>
                <IconMedium name={f.icon} />
              </RadioIcon>
              <RadioInfo>
                <RadioTitle>{f.title}</RadioTitle>
                <RadioDescription>{f.description}</RadioDescription>
              </RadioInfo>
            </RadioArea>
          </Content>
        ))
      ) : (
        <></>
      )}
    </Wrapper>
  );
}
