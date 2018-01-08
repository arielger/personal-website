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
          padding-top: ${stylesVariables.spacing.big};
        }

        @media ${stylesVariables.mq.medium} {
          .contact {
            padding-top: ${stylesVariables.spacing.veryBig};
          }
        }

        .contact-row {
          padding-bottom: 96px;
        }

        @media ${stylesVariables.mq.medium} {
          .contact-row {
            padding-bottom: ${stylesVariables.spacing.veryBig};
          }
        }

        .title {
          font-size: ${stylesVariables.fontSizes.title};
          margin-bottom: ${stylesVariables.spacing.medium};
        }

        @media ${stylesVariables.mq.medium} {
          .title {
            margin-bottom: 64px;
          }
        }

        .email {
          font-size: 26px;
          font-weight: ${stylesVariables.fontWeights.medium};
          text-decoration: none;
          position: relative;
          padding-bottom: 10px;
        }

        @media ${stylesVariables.mq.medium} {
          .email {
            font-size: 43px;
          }
        }

        .email:after {
          content: "";
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 2px;
          background-color: currentColor;
        }

        @media ${stylesVariables.mq.medium} {
          .email:after {
            height: 4px;
          }
        }
      `}
    </style>
  </section>
);

export default Contact;
