import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
// import Menu from '../asets/menu_bar';

export default function Header({title}) {
  return (
    <nav>
      <div className="nav">
        <Link className="logo link" to="/">
          {title?title:'Title'}
        </Link>
        <div>
          <ul>
            <li>
              <Link className="link" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/about">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
