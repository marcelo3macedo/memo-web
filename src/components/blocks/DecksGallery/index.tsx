import React from 'react';
import Deck from '@components/blocks/Deck';

import { Wrapper, Content } from './styles';

export default function DecksGallery() {
  return (
    <Wrapper>
      <Content>
        <Deck data={ { "title": "Deck teste do marcelo", "background": "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg", "quantity": 100, "icon": "user" } } />
        <Deck data={ { "title": "Deck teste do marcelo", "background": "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg", "quantity": 100, "icon": "user" } } />
        <Deck data={ { "title": "Deck teste do marcelo", "background": "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg", "quantity": 100, "icon": "user" } } />
        <Deck data={ { "title": "Deck teste do marcelo", "background": "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg", "quantity": 100, "icon": "user" } } />
        <Deck data={ { "title": "Deck teste do marcelo", "background": "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg", "quantity": 100, "icon": "user" } } />
        <Deck data={ { "title": "Deck teste do marcelo", "background": "https://www.michaelbuble.com/sites/g/files/g2000002856/f/Sample-image10-highres.jpg", "quantity": 100, "icon": "user" } } />
      </Content>
    </Wrapper>
  );
}