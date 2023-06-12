import FooterPrimary from '@components/footer/FooterPrimary';
import HeaderPrimary from '@components/header/HeaderPrimary';
import MenuPrimary from '@components/menu/MenuPrimary';
import MenuSidebar from '@components/menu/MenuSidebar';
import MenuUserTop from '@components/menu/MenuUserTop';
import SearchPrimary from '@components/search/SearchPrimary';
import SidebarPrimary from '@components/sidebar/SidebarPrimary';
import PropTypes from 'prop-types';

import {
  Body,
  Content,
  PageContainer,
  PageWrapper,
  Section,
  Wrapper,
} from './styles';

export default function MainLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Section>
          <MenuPrimary />
          <HeaderPrimary />
          <Body>
            <MenuSidebar />
            <PageWrapper>
              <MenuUserTop />
              <PageContainer>{children}</PageContainer>
            </PageWrapper>
          </Body>
        </Section>
        <SidebarPrimary />
        <FooterPrimary />
        <SearchPrimary />
      </Content>
    </Wrapper>
  );
}

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
