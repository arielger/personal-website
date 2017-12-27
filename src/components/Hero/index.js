import React from "react";
import stylesVariables from "../../variables/styles.json";
import Separator from "../Separator";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero-row row">
        <div className="col-12 col-lg-8">
          <p>
            I’m a front-end developer 👨‍💻 from Buenos Aires, Argentina 🇦🇷. I’m
            really passionate about my work: i’m always looking to learn new
            technologies and create great products.
          </p>

          <p>
            I worked on a software factory for startups called{" "}
            <a href="redmintlabs.com">Redmint</a> and right now i’m working at{" "}
            <a href="https://auth0.com/">Auth0</a>, creating a better
            authentication experience.
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
