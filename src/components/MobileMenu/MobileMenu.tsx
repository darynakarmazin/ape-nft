import React, { useState, useEffect } from 'react';
import {
  Backdrop,
  ButtonClose,
  Modal,
  ModalContent,
  ModalItem,
  ModalList,
} from './MobileMenu.styled';
import Footer from '../../sections/Footer/Footer';

interface Props {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function MobileMenu({ isMobileMenuOpen, setIsMobileMenuOpen }: Props) {
  const [activeSection, setActiveSection] = useState('');

  const handleModalClose = () => {
    setIsMobileMenuOpen(false);
  };

  const handleOverlyClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) {
      handleModalClose();
    }
  };

  useEffect(() => {
    const handleOnClose = (e: KeyboardEvent) => {
      if (e.code === 'Escape') {
        handleModalClose();
      }
    };

    window.addEventListener('keydown', handleOnClose);

    return () => {
      window.removeEventListener('keydown', handleOnClose);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const sectionIds = ['about', 'm-map', 'faq', 'arts', 'mint'];

    const handleScroll = () => {
      const scrollY = window.scrollY;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop - 50 <= scrollY) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {isMobileMenuOpen && (
        <Backdrop onClick={handleOverlyClick}>
          <Modal className="container" onClick={handleOverlyClick}>
            <ModalContent>
              <ButtonClose
                onClick={handleModalClose}
                aria-label="button for closing menu"
              >
                close
              </ButtonClose>

              <div>
                <ModalList>
                  <ModalItem>
                    <a
                      href="#about"
                      onClick={handleModalClose}
                      className={activeSection === 'about' ? 'active' : ''}
                    >
                      ABOUT
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#m-map"
                      onClick={handleModalClose}
                      className={activeSection === 'm-map' ? 'active' : ''}
                    >
                      M-MAP
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#faq"
                      onClick={handleModalClose}
                      className={activeSection === 'faq' ? 'active' : ''}
                    >
                      FAQ
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#arts"
                      onClick={handleModalClose}
                      className={activeSection === 'arts' ? 'active' : ''}
                    >
                      ARTS
                    </a>
                  </ModalItem>
                  <ModalItem>
                    <a
                      href="#mint"
                      onClick={handleModalClose}
                      className={activeSection === 'mint' ? 'active' : ''}
                    >
                      MINT
                    </a>
                  </ModalItem>
                </ModalList>
              </div>
              <Footer />
            </ModalContent>
          </Modal>
        </Backdrop>
      )}
    </>
  );
}

export default MobileMenu;
