import React from "react";
import Link from "gatsby-link";
import GithubIcon from "./images/github.svg";
import LinkedinIcon from "./images/linkedin.svg";
import TwitterIcon from "./images/twitter.svg";
import CodepenIcon from "./images/codepen.svg";
import stylesVariables from "../../variables/styles.json";
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
      <h1 className="title">Ariel Gerstein</h1>
      <nav>
        <ul className="navigation-list list-unstyled">
          {links.map(link => (
            <li key={link.text}>
              <Link to={link.href} activeClassName="active" exact>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
        <ul className="social-media-list list-unstyled">
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

    <style jsx>
      {`
        .list-unstyled {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }

        header {
          margin-top: 96px;
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .title {
          display: inline-block;
        }

        nav {
          display: inline-flex;
        }

        .navigation-list,
        .social-media-list {
          display: flex;
        }

        .navigation-list li {
          margin: 0 ${stylesVariables.spacing.small};
        }

        .navigation-list li :global(a) {
          color: ${stylesVariables.colors.mediumGrey};
          padding: 8px;
        }

        .navigation-list li :global(a.active) {
          font-weight: ${stylesVariables.fontWeights.medium};
        }

        .social-media-list li {
          margin: 0 4px;
        }

        .social-media-list li :global(a) {
          padding: 4px;
        }
      `}
    </style>
  </header>
);

export default Header;
