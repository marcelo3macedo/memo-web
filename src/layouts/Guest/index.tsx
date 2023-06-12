import FooterPrimary from '@components/footer/FooterPrimary';
import HeaderPublic from '@components/header/HeaderPublic';
import PropTypes from 'prop-types';

import { Content, Section, Wrapper } from './styles';

export default function GuestLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <HeaderPublic />
        <Section>{children}</Section>
        <FooterPrimary />
      </Content>
    </Wrapper>
  );
}

GuestLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
