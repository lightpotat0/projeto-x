import { theme } from '@/styles/theme';
import { Oswald, Roboto } from 'next/font/google';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoMenu } from 'react-icons/io5';
import background from '@/config/img/floatMenu.svg';
import { useEffect, useState } from 'react';

const oswald = Oswald({ subsets: ['latin'] });
const roboto = Roboto({
  subsets: ['latin'],
  weight: '700',
});
function NavButton() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar expand={false}>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          style={{
            backgroundImage: scrolled ? `url(${background.src})` : '',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            width: '50px',
            height: '50px',
            border: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <IoMenu
            size={40}
            style={{
              color: theme.colors.white,
              marginBottom: '5px',
              marginLeft: '5px',
            }}
          />
        </Navbar.Toggle>
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${false}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
          placement="end"
        >
          <Offcanvas.Header
            closeButton
            style={{
              backgroundColor: theme.colors.lightPrimary,
              color: theme.colors.white,
            }}
          >
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${false}`}
              style={{ fontSize: '28px', color: theme.colors.lightSecondary }}
            >
              <span className={oswald.className}>Menu</span>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{
              backgroundColor: theme.colors.lightPrimary,
              color: theme.colors.white,
            }}
          >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/" className={roboto.className}>
                HOME
              </Nav.Link>
              <Nav.Link href="/about-us" className={roboto.className}>
                SOBRE AXARCA
              </Nav.Link>
              <Nav.Link href="/#ourMasters" className={roboto.className}>
                NOSSOS MESTRES
              </Nav.Link>
              <Nav.Link href="/" className={roboto.className}>
                PRODUTOS
              </Nav.Link>
              <Nav.Link href="/" className={roboto.className}>
                NOVIDADES
              </Nav.Link>
              <Nav.Link href="/" className={roboto.className}>
                PROMO
              </Nav.Link>
              <Nav.Link href="/#Footer" className={roboto.className}>
                CONTATO
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default NavButton;
