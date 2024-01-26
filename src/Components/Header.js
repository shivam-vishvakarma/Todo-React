import React from "react";
import { Link } from "react-router-dom";
import './Header.css';
import Menu from '../asets/menu.svg';

export default function Header({title}) {
  return (
    <nav>
      <div className="nav">
        <Link className="logo" to="/">
          {title?title:'Title'}
        </Link>
        <div>
          <ul>
            <li>
              <Link aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">
                About
              </Link>
            </li>
            <Menu />
          </ul>
        </div>
      </div>
    </nav>
  );
}
