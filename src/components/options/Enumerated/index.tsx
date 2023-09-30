import { HeaderText } from '@components/elements/texts/header';
import { SubtitleText } from '@components/elements/texts/subtitle';
import { Styles } from '@interfaces/texts/TextProps';

import { Content, Number, Option, Value, Wrapper } from './styles';

export function EnumeratedOptions({ options }: any) {
  if (!options) return <></>;

  function action(value) {
    console.log(value);
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
