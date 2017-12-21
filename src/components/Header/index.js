import React from "react";
import Link from "gatsby-link";
import GithubIcon from "./images/github.svg";
import LinkedinIcon from "./images/linkedin.svg";
import TwitterIcon from "./images/twitter.svg";
import CodepenIcon from "./images/codepen.svg";
/* eslint-disable jsx-a11y/anchor-is-valid */

const links = [
  { href: "/", text: "Home" },
  { href: "/articles", text: "Articles" },
];

const socialMediaLinks = [
  { href: "https://github.com/arielger", icon: GithubIcon },
  { href: "https://www.linkedin.com/in/arielgerstein/", icon: LinkedinIcon },
  { href: "https://twitter.com/arielger", icon: TwitterIcon },
  { href: "https://codepen.io/arielger", icon: CodepenIcon },
];

const Header = () => (
  <header>
    <div className="container">
      <h1>Ariel Gerstein</h1>
      <nav>
        <ul className="navigation-list">
          {links.map(link => (
            <li key={link.text}>
              <Link to={link.href} activeClassName="active">
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="social-media-icons">
          {socialMediaLinks.map(socialMediaLink => (
            <li key={socialMediaLink.href}>
              <Link to={socialMediaLink.href} activeClassName="active">
                {React.createElement(socialMediaLink.icon, {
                  width: 22,
                })}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
