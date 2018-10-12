import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FOOTER } from '../../util/footer_util';

const Footer = ({ currentUser }) => {
  const loggedOut = () => (
    <footer>
      <div id="footer-content">
        <ul>
          <li>
            <NavLink to="/">English (US)</NavLink>
          </li>
          <li>
            <NavLink to="/">Español</NavLink>
          </li>
          <li>
            <NavLink to="/">Français (France)</NavLink>
          </li>
          <li>
            <NavLink to="/">中文(简体)</NavLink>
          </li>
          <li>
            <NavLink to="/">العربية</NavLink>
          </li>
          <li>
            <NavLink to="/">Português (Brasil)</NavLink>
          </li>
          <li>
            <NavLink to="/">Italiano</NavLink>
          </li>
          <li>
            <NavLink to="/">한국어</NavLink>
          </li>
          <li>
            <NavLink to="/">Deutsch</NavLink>
          </li>
          <li>
            <NavLink to="/">हिन्दी</NavLink>
          </li>
          <li>
            <NavLink to="/">日本語</NavLink>
          </li>

        </ul>

        <ul>
          { FOOTER.map( link => {
            const txt = link.toLowerCase().replace(" ", "_");
            return (
              <li key={ txt }>
                <Link to={`/${txt}`} >{link}</Link>
              </li>
            );
          }) }
        </ul>

        <div>lifenovel &#0169; 2018</div>
      </div>
    </footer>
  );

  const loggedIn = () => (
    <div></div>
  );

  return currentUser ? loggedIn() : loggedOut();
};

export default Footer;
