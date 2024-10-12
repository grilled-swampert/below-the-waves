import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <h1>
          <Link to="/" className="logo">
            Below The Waves
          </Link>
        </h1>

        <nav className="navbar" data-navbar>
          <button
            className="nav-close-btn"
            aria-label="Close Menu"
            data-nav-close-btn
          >
            <ion-icon name="close-outline"></ion-icon>
          </button>

          <ul className="navbar-list">
            <li>
              <Link to="/#home" className="navbar-link" data-nav-link>
                <span>Home</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/#about" className="navbar-link" data-nav-link>
                <span>About</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/#service" className="navbar-link" data-nav-link>
                <span>Service</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/#donate" className="navbar-link" data-nav-link>
                <span>Donate</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/#event" className="navbar-link" data-nav-link>
                <span>Event</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>

            <li>
              <Link to="/#contact" className="navbar-link" data-nav-link>
                <span>Contact</span>
                <ion-icon
                  name="chevron-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-action">
          <button className="search-btn" aria-label="Search">
            <ion-icon name="search-outline"></ion-icon>
          </button>

          <button className="btn btn-primary">
            <span>Donation</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
      </div>
    </header>
  );
};
