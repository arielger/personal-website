import React from "react";
import Separator from "../Separator";
import stylesVariables from "../../variables/styles.json";

const emailDir = "contact@arielgerstein.com";

const Contact = () => (
  <section className="contact">
    <div className="container">
      <div className="contact-row row">
        <div className="col-12">
          <h2 className="title">Contact 👋</h2>
          <a className="email" href={`mailto:${emailDir}`}>
            {emailDir}
          </a>
        </div>
      </div>
      <Separator />
    </div>

    <style jsx>
      {`
        .contact {
          padding-top: ${stylesVariables.spacing.veryBig};
        }

        .contact-row {
          padding-bottom: ${stylesVariables.spacing.veryBig};
        }

        .title {
          font-size: ${stylesVariables.fontSizes.title};
          color: ${stylesVariables.colors.mediumGray};
          margin-bottom: 96px;
        }

        .email {
          font-size: 43px;
          font-weight: ${stylesVariables.fontWeights.medium};
          text-decoration: none;
          position: relative;
        }

        .email:hover:after {
          transform: scaleX(0);
        }

        .email:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: -10px;
          height: 4px;
          background-color: currentColor;
          transform-origin: 0 0;
          transform: scaleX(1);
          transition: transform 0.2s;
        }
      `}
    </style>
  </section>
);

export default Contact;
