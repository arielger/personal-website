import React from "react";
import variableStyles from "../../variables/styles.json";

const Hero = () => (
  <div>
    <div className="container">
      <div className="row">
        <div className="col-8">
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
    </div>

    <style jsx>
      {`
        p {
          font-size: ${variableStyles.fontSizes.medium};
        }
      `}
    </style>
  </div>
);

export default Hero;
