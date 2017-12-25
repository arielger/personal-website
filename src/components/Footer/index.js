import React from "react";
import stylesVariables from "../../variables/styles.json";

const Footer = () => (
  <footer>
    <div className="container">
      <div className="footer-row">
        <span>
          Site made using <a href="https://www.gatsbyjs.org/">Gatsby</a>,{" "}
          <a href="https://rsms.me/inter/">Inter UI</a> and{" "}
          <a href="https://simpleicons.org/">Simple Icons</a>.
        </span>
        <span>Ariel Gerstein - 2018</span>
      </div>
    </div>

    <style jsx>
      {`
        footer {
          padding: ${stylesVariables.spacing.big} 0;
          color: ${stylesVariables.colors.lightGrey};
          font-size: 13px;
        }

        .footer-row {
          display: flex;
          justify-content: space-between;
        }
      `}
    </style>
  </footer>
);

export default Footer;
