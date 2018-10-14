import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import LoginFormContainer from '../session/login_form_container';
import SearchBarContainer from '../search/search_bar_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import logo from '../../../app/assets/images/logo_white.png';

const Header = ({ currentUser, logout, history }) => {

  const handleLogout = (e) => {
    e.preventDefault();
    logout()
      .then( history.push("/") );
  }

  const loggedOut = () => (
    <header className="nav-bar-container">
      <nav className="nav-bar">
        <Link to="/" className="logo">
          <h1>lifenovel</h1>
        </Link>
        <Switch>
          <Route path="/signup" render={ () => <LoginFormContainer header={true} /> } />
          <Route path="/users" render={ () => <LoginFormContainer header={true} /> } />
          <Route exact path="/" render={ () => <LoginFormContainer header={true} /> } />
        </Switch>
      </nav>
    </header>
  )
  const loggedIn = () => (
    <header className="user-nav-bar-container">
      <nav className="user-nav-bar">
        <div className="left-nav-bar">
          <Link to="/" >
            <img className="home" src={ logo } />
          </Link>
          <SearchBarContainer />
        </div>
        <div className="right-nav-bar flex">

          <div className="nav-links">

            <div>
              <div className="nav-link">
                <img className="user-icon" src={ currentUser.profile_photo } />
                <Link to={`/${currentUser.id}`}>
                  { currentUser.first_name }
                </Link>
              </div>
            </div>
            <div className="nav-link">
              <Link to="/">Home</Link>
            </div>
           <div className="nav-link">
              <Link to="#">Create</Link>
            </div>

            <div className="nav-icons flex">
                <i tabIndex="1" className="fas fa-user-friends nav-icon"></i>
                <i tabIndex="1" className="fab fa-facebook-messenger nav-icon"></i>
                <i tabIndex="1" className="fas fa-bell nav-icon"></i>
            </div>

            <div className="nav-icons flex">
                <i tabIndex="1" className="fas fa-question-circle nav-icon"></i>
                <i tabIndex="1" className="fas fa-caret-down nav-icon"></i>
            </div>

            <button className="header-btn" onClick={ handleLogout }>Logout</button>

          </div>

        </div>
      </nav>
    </header>
  )
  return currentUser ? loggedIn() : loggedOut();

}

        // <SearchContainer />

export default Header;
