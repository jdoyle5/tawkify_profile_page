import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => (
  <div className="nav-bar">
    <nav className="nav-top">
      <div className="nav-left">
        <div className="nav-tawkify">
          <Link to={""}>
            <img src="assets/images/Tawkify_White_Logo.png"></img>
          </Link>
        </div>
        <div className="nav-link"><Link to={""}>How It Works</Link></div>
        <div className="nav-link"><Link to={""}>FAQ</Link></div>
        <div className="nav-link"><Link to={""}>Stories</Link></div>
        <div className="nav-link"><Link to={""}>Sign In</Link></div>
      </div>
      <div className="nav-right">
        <div className="nav-phone">1(888) 494-7280</div>
        <Link to={""} className="chat-box">
          <div className="love-expert">Chat with a love expert</div>
          <div className="click-here-top">
          <i className="fa fa-phone phone" aria-hidden="true"></i>
          <div className="click-here-bottom-one">Click here for</div>
          </div>
          <div className="click-here-bottom">free screening</div>
        </Link>
      </div>
    </nav>
  </div>
);

export default NavBar;
