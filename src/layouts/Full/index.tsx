import HeaderSecondary from '@components/header/HeaderSecondary';
import PropTypes from 'prop-types';

import { Content, Header, Section, Wrapper } from './styles';

export default function FullLayout({ children }) {
  return (
    <Wrapper>
      <Content>
        <Header>
          <HeaderSecondary />
        </Header>
        <Section>{children}</Section>
      </Content>
    </Wrapper>
  );
}

FullLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
