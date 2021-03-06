import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {withRouter} from 'react-router';
import PropTypes from 'prop-types';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import login from './services/loginService';

import Home from './components/Home';
import Login from './components/Login';
import Menu from './components/Menu';

//usuarios
import Users from './components/Users';
import User from './components/User';

//Ofertas
import Deals from './components/Deals';
import Deal from './components/Deal';

//Ofertas Publicas para usuarios
import PublicDeals from './components/PublicDeals';
import PublicDeal from './components/PublicDeal';

import './App.css';

const HomeRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <Home />;
};

const UsersRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <Users />;
};

const UserRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <User />;
};

const dealsRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <Deals />;
};

const dealRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <Deal />;
};

const publicDealsRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <PublicDeals />;
};

const publicDealRoute = props => {
  if (!login.isLogged()) {
    props.history.push('/login');
    return null;
  }
  return <PublicDeal />;
};

const LoginRoute = props => {
  if (login.isLogged()) {
    props.history.push('/');
    return null;
  }
  return <Login {...props} />;
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  componentDidMount() {
    document.title = 'Sistema de Ofertas';
  }
  render() {
    console.log(this.state);
    console.log("This is the process.env", process.env.PUBLIC_URL)    
    return (      
      <div className="App">
        {/* mostra o menu sempre q tiver logado */}
        {login.isLogged() ? (
          <React.Fragment>
            <Menu />
            <br />
            <div className="row" />
          </React.Fragment>
        ) : (
          ''
        )}

        {/* Login */}
        <Route path="/login" component={LoginRoute} />

        {/* Home */}
        <Route exact path="/" component={HomeRoute} />

        {/* Usuario */}
        <Route exact path="/users" component={UsersRoute} />
        <Route exact path="/user" component={UserRoute} />
        <Route exact path="/user/:id" component={UserRoute} />

        {/* Oferta */}
        <Route exact path="/deals" component={dealsRoute} />
        <Route exact path="/deal" component={dealRoute} />
        <Route exact path="/deal/:id" component={dealRoute} />

        {/* Oferta */}
        <Route exact path="/ofertas" component={publicDealsRoute} />
        <Route exact path="/oferta" component={publicDealRoute} />
        <Route exact path="/oferta/:id" component={publicDealRoute} />        

      </div>
    );
  }
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };
}

export default withRouter(App);
