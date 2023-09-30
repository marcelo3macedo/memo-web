import { TitleText } from '@components/elements/texts/title';
import { generateContent } from '@helpers/AnimatedHelper';

import { Content, Option, Value, Wrapper } from './styles';

export function AnimatedOptions({ options }: any) {
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
              action(o);
            }}>
            <Value>
              <TitleText value={generateContent(o)} />
            </Value>
          </Option>
        ))}
      </Content>
    </Wrapper>
  );
}
