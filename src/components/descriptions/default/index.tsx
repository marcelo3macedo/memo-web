import { ParagraphText } from '@components/elements/texts/paragraph';
import { DescriptionDefaultProps } from '@interfaces/components/descriptions/DescriptionDefaultProps';

import { Wrapper } from './styles';

export function DefaultDescription({ content }: DescriptionDefaultProps) {
  const lines = content ? content.split('|') : null;

  if (!lines) {
    return <></>;
  }

  return (
    <Wrapper>
      {lines.map((s: string, i: number) => (
        <ParagraphText key={i} value={s} />
      ))}
    </Wrapper>
  );
}
