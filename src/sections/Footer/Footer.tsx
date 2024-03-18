import { ContentContainer } from '../../components/ContentContainer/ContentContainer.styles';
import { Copyright, FooterSection } from './Footer.styled';

function Footer() {
  return (
    <FooterSection>
      <ContentContainer>
        <Copyright>&copy; Yacht ape 2024 all rights reserved</Copyright>
      </ContentContainer>
    </FooterSection>
  );
}

export default Footer;
