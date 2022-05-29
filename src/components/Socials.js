import React from 'react';
import '../scss/home.scss';

// Icon Imports
import { FiGithub, FiLinkedin, FiMail, FiFileText } from 'react-icons/fi';

export default function Socials() {
  return (
    <div className="socials">
      {SOCIALS.map((link) => {
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.icon}
          </a>
        );
      })}
    </div>
  );
}

// Socials
const SOCIALS = [
  {
    name: 'GitHub',
    url: 'https://github.com/dcmaglione/',
    icon: <FiGithub />,
    type: 'external',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dcmaglione/',
    icon: <FiLinkedin />,
    type: 'external',
  },
  {
    name: 'Email',
    url: 'mailto:dcmaglione@gmail.com',
    icon: <FiMail />,
    type: 'external',
  },
  {
    name: 'Resume',
    url: '/dcm_resume.pdf',
    icon: <FiFileText />,
    type: 'external',
  },
];
