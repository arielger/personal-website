import React from "react";
import { Link } from "gatsby";
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
      <h1 className="title">
        <Link to="/">Ariel Gerstein</Link>
      </h1>
      <nav className="navigation-list">
        <ul className="list-unstyled">
          {links.map((link) => (
            <li key={link.text}>
              <Link to={link.href} activeClassName="active" exact>
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="social-media-list list-unstyled">
        {socialMediaLinks.map((socialMediaLink) => (
          <li key={socialMediaLink.href}>
            <a target="_blank" href={socialMediaLink.href}>
              {React.createElement(socialMediaLink.icon, {
                width: 22,
              })}
            </a>
          </li>
        ))}
      </ul>
    </div>

    <style jsx>
      {`
        header {
          margin: ${stylesVariables.spacing.medium} 0;
        }

        @media ${stylesVariables.mq.medium} {
          header {
            margin-top: 96px;
            margin-bottom: ${stylesVariables.spacing.big};
          }
        }

        .container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
        }

        @media ${stylesVariables.mq.medium} {
          .container {
            flex-direction: row;
          }
        }

        .title {
          display: inline-block;
          margin-bottom: ${stylesVariables.spacing.small};
          flex-basis: 100%;
          text-align: center;
        }

        @media ${stylesVariables.mq.medium} {
          .title {
            font-size: ${stylesVariables.fontSizes.title};
            flex-basis: auto;
            text-align: left;
            margin-bottom: 0;
          }
        }

        .title :global(a) {
          text-decoration: none;
          color: ${stylesVariables.colors.gray[9]};
        }

        nav {
          display: inline-flex;
        }

        .navigation-list,
        .social-media-list {
          display: inline-flex;
          justify-content: center;
        }

        @media ${stylesVariables.mq.medium} {
          .navigation-list,
          .social-media-list {
            justify-content: unset;
          }
        }

        .navigation-list {
          margin-bottom: ${stylesVariables.spacing.medium};
        }

        @media ${stylesVariables.mq.medium} {
          .navigation-list {
            margin-left: auto;
            margin-bottom: 0;
          }
        }

        .navigation-list ul {
          display: inline-flex;
        }

        .navigation-list li {
          margin: 0 ${stylesVariables.spacing.small};
        }

        .navigation-list li :global(a) {
          padding: 8px;
          text-decoration: none;
          color: ${stylesVariables.colors.gray[9]};
        }

        .navigation-list li :global(a.active) {
          font-weight: ${stylesVariables.fontWeights.medium};
        }

        .social-media-list {
          color: ${stylesVariables.colors.gray[5]};
        }

        .social-media-list li {
          margin: 0 4px;
        }

        .social-media-list li :global(a) {
          padding: 4px;
          text-decoration: none;
          display: block;
        }

        .social-media-list li :global(a svg) {
          display: block; // Remove whitespace below icons
        }
      `}
    </style>
  </header>
);

export default Header;
