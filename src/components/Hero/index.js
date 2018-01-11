import React from "react";
import stylesVariables from "../../variables/styles.json";
import Separator from "../Separator";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-row row">
        <div className="col-12 col-lg-7">
          <p>
            I'm a Javascript Developer 👨‍💻 with a strong focus on React ⚛️. I'm
            from Buenos Aires, Argentina 🇦🇷 and currently working at{" "}
            <a href="https://auth0.com/">Auth0</a>.
          </p>
          <p>
            In my free time I enjoy writing in my blog and learning about new
            web technologies like React, Redux or functional programming.
          </p>
        </div>
      </div>
      <Separator />
    </div>

    <style jsx>
      {`
        .hero-row {
          padding-bottom: ${stylesVariables.spacing.big};
        }

        @media ${stylesVariables.mq.medium} {
          .hero-row {
            padding-bottom: 96px;
          }
        }

        p {
          font-size: ${stylesVariables.fontSizes.generalText};
          line-height: ${stylesVariables.lineHeights.generalText};
        }

        @media ${stylesVariables.mq.medium} {
          p {
            font-size: ${stylesVariables.fontSizes.medium};
            line-height: ${stylesVariables.lineHeights.medium};
          }
        }
      `}
    </style>
  </section>
);

export default Hero;
