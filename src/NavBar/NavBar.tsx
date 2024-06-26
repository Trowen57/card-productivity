import React, {ReactElement} from 'react';
import './NavBar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faChartSimple, faStore} from "@fortawesome/free-solid-svg-icons";
import {faClock} from "@fortawesome/free-regular-svg-icons";

export enum Page {
  Work,
  Shop,
  Inventory,
  Stats,
}

interface NavBarProps {
  activePage: Page;
  setPage: (page: Page) => void;
}

const NavBar = ({activePage, setPage}: NavBarProps): ReactElement => {
  return (
    <nav className="NavBar">
      <ul className="NavBar-list">
        <li>
          <button
            onClick={() => setPage(Page.Work)}
            className={`${activePage === Page.Work && 'NavBar-active'}`}
            aria-label='Work Page'
          >
            <FontAwesomeIcon icon={faClock} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Shop)}
            className={`${activePage === Page.Shop && 'NavBar-active'}`}
            aria-label='Shop Page'
          >
            <FontAwesomeIcon icon={faStore} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Inventory)}
            className={`${activePage === Page.Inventory && 'NavBar-active'}`}
            aria-label='Inventory Page'
          >
            <FontAwesomeIcon icon={faBriefcase} />
          </button>
        </li>
        <li>
          <button
            onClick={() => setPage(Page.Stats)}
            className={`${activePage === Page.Stats && 'NavBar-active'}`}
            aria-label='Statistics Page'
          >
            <FontAwesomeIcon icon={faChartSimple} />
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
