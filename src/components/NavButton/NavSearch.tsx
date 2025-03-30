import { theme } from '@/styles/theme';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { IoIosSearch } from 'react-icons/io';
import background from '@/config/img/floatMenu.svg';
import { SearchBar } from '../Header/styled';
import { FaArrowLeft } from 'react-icons/fa6';
import SearchCard from './SearchCard';
import product from '@/config/img/productImg.svg';

function NavSearch() {
  return (
    <>
      <Navbar expand={false} className="w-100">
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${false}`}
          style={{
            backgroundImage: `url(${background.src})`,
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
          <IoIosSearch
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
              backgroundColor: theme.colors.white,
              display: 'flex',
            }}
          >
            <div
              style={{
                marginTop: '3rem',
                color: theme.colors.gray,
                marginRight: '1rem',
              }}
            >
              <FaArrowLeft size={20} />
            </div>
            <SearchBar
              style={{
                marginTop: '3rem',
                border: `3px solid ${theme.colors.secondary}`,
                borderRadius: '5px',
              }}
            >
              <div className="search">
                <input
                  type="text"
                  name="search"
                  id="search"
                  className="searchBar"
                  placeholder="  Busque aqui seu produto..."
                  style={{ marginLeft: '0.5rem' }}
                />
                <button
                  type="submit"
                  className="submitButton"
                  style={{ borderRadius: 0 }}
                >
                  <IoIosSearch size={30} />
                </button>
              </div>
            </SearchBar>
          </Offcanvas.Header>
          <Offcanvas.Body
            style={{
              backgroundColor: theme.colors.white,
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-evenly',
            }}
          >
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
            <SearchCard imgSrc={product.src} name="caneca sublimada" />
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Navbar>
    </>
  );
}

export default NavSearch;
