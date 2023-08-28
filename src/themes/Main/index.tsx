import FooterPrimary from '@components/footer/FooterPrimary';
import HeaderMobile from '@components/header/mobile';
import HeaderPrimary from '@components/header/primary';
import { activeAction } from '@store/modules/menu/actions';
import { RootState } from '@store/modules/rootReducer';
import { useDispatch, useSelector } from 'react-redux';

import { Content, Footer, Page, Wrapper } from './styles';

export function MainTheme({ children }: any) {
  const dispatch = useDispatch();
  const { active }: any = useSelector((state: RootState) => state.menu);

  function interactModal() {
    dispatch(activeAction());
  }

  return (
    <Wrapper>
      <HeaderPrimary mobModal={active} action={interactModal} />
      <Content>
        <HeaderMobile
          action={() => {
            interactModal();
          }}
        />
        <Page>{children}</Page>
        <Footer>
          <FooterPrimary />
        </Footer>
      </Content>
    </Wrapper>
  );
}
