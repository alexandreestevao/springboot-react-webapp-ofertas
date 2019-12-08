import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router';

import loginService from './../services/loginService';

const logoff = (e, p) => {
  loginService.logout();
  p.history.push('/login');
};

const getClassNameForActivePage = (props, pageName) => {
  //alert(props.location.pathname.indexOf('/users'));
  if (props && props.location) {
    if (pageName === 'Home' && props.location.pathname === '/') {
      return 'nav-item active';
    } else if (
      pageName === 'Users' &&
      String(props.location.pathname).indexOf('/user') === 0
    ) {
      return 'nav-item active';
    } else if (
      pageName === 'deals' &&
      String(props.location.pathname).indexOf('/deal') === 0
    ) {
      return 'nav-item active';
    }else if (
      pageName === 'ofertas' &&
      String(props.location.pathname).indexOf('/ofertas') === 0
    ) {
      return 'nav-item active';
    }
  }
  return 'nav-item';
};

const Menu = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="/">
    Ofertas CDPU
    </a>
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className={getClassNameForActivePage(props, 'Home')}>
          <a className="nav-link" href="/">
            Home
          </a>
        </li>
        <li className={getClassNameForActivePage(props, 'Users')}>
          <a className="nav-link" href="/users">
            Usuários(ADM)
          </a>
        </li>
        <li className={getClassNameForActivePage(props, 'deals')}>
          <a className="nav-link" href="/deals">
            Ofertas(ADM)
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/ofertas">
            Lista de Ofertas(público)
          </a>
        </li>
      </ul>

      <button
        onClick={e => {
          logoff(e, props);
        }}
        className="btn btn-outline-secondary my-2 my-sm-0"
      >
        logoff
      </button>
    </div>
  </nav>
);

Menu.propTypes = {
  searchString: PropTypes.string,
  recipes: PropTypes.array,
};

export default withRouter(Menu);