import { Key } from 'react';

import { BaseList } from '../base';
import { TutorialItem } from '../tutorial';

import { Content } from './styles';

export function TutorialList({ tutorials }: any) {
  function generateItem(t: any, i: Key) {
    return <TutorialItem key={i} item={t} />;
  }

  if (!tutorials || tutorials.length === 0) {
    return <></>;
  }

  const items = tutorials.map((c: any, i: Key) => generateItem(c, i));
  return (
    <Content>
      <BaseList children={items} />
    </Content>
  );
}
