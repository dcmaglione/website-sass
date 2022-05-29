import React from 'react';
import { Link } from 'react-scroll';

export default function Navbar() {
  return (
    <div className="navbar">
      {LINKS.map((link, index) => {
        return (
          <Link
            activeClass="active"
            spy={true}
            smooth={true}
            duration={600}
            to={link}
            key={index}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}

// Navbar Links
const LINKS = ['about', 'experience', 'projects'];
