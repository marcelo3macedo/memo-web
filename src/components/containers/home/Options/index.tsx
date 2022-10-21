import React from 'react';

import Option from '@components/actions/Option';
import { Wrapper, Content } from './styles';

export default function Options() {
  return (
    <Wrapper>
      <Content>
         <Option title={"Buscar"} subTitle={"na galeria"} icon={"gallery"} />
         <Option title={"Criar"} subTitle={"nova sessão"} icon={"new"} template={"cold"} />
      </Content>
    </Wrapper>
  );
}