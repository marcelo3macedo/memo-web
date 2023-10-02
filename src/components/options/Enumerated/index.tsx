import { HeaderText } from '@components/elements/texts/header';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { Styles } from '@interfaces/texts/TextProps';
import { selectOptionAction } from '@store/modules/activities/actions';
import { useDispatch } from 'react-redux';

import { Content, Number, Option, Value, Wrapper } from './styles';

export function EnumeratedOptions({ options, answer }: any) {
  const dispatch = useDispatch();
  if (!options) return <></>;

  function action(value) {
    dispatch(selectOptionAction({ option: value, answer }));
  }

  return (
    <Wrapper>
      <Content>
        {options.map((o, i) => (
          <Option
            key={i}
            onClick={() => {
              action(o.value);
            }}>
            <Number>
              <SubtitleText value={i + 1} styled={Styles.Light} />
            </Number>
            <Value>
              <HeaderText value={o.value} />
            </Value>
          </Option>
        ))}
      </Content>
    </Wrapper>
  );
}
