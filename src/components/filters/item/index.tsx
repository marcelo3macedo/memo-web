import { FeaturedText } from '@components/elements/texts/featured';
import { SubtitleText } from '@components/elements/texts/subtitle';
import IconMedium from '@components/icons/IconMedium';
import { Key } from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Item, Option, Options, TextArea } from './styles';

export function ItemFilter({ item, selected, action, selectAction }: any) {
  const { t } = useTranslation();
  const isSelected = selected && selected === item.name;

  function generateItem(c: any, i: Key) {
    return (
      <Option
        key={i}
        onClick={() => {
          selectAction(c.name);
        }}>
        <FeaturedText value={c.name} />
      </Option>
    );
  }

  const items = item.items.map((c: any, i: Key) => generateItem(c, i));
  return (
    <Container className="no-select">
      <Item
        onClick={() => {
          action(item);
        }}>
        <TextArea>
          <SubtitleText value={t(`filters.${item.name}`)} />
        </TextArea>
        <IconMedium name={'down'} />
      </Item>
      {isSelected ? <Options>{items}</Options> : <></>}
    </Container>
  );
}
