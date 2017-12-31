import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import twemoji from "twemoji";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "prismjs/themes/prism.css";
import InterUIRegularWoffFont from "../fonts/Inter-UI-Regular.woff";
import InterUIRegularWoff2Font from "../fonts/Inter-UI-Regular.woff2";
import InterUIMediumWoffFont from "../fonts/Inter-UI-Medium.woff";
import InterUIMediumWoff2Font from "../fonts/Inter-UI-Medium.woff2";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styleVariables from "../variables/styles.json";

class TemplateWrapper extends React.Component {
  componentDidMount() {
    twemoji.parse(this.wrapper, {
      folder: "svg",
      ext: ".svg"
    });
  }
  render() {
    const { children } = this.props;

    return (
      <div
        ref={e => {
          this.wrapper = e;
        }}
      >
        <Helmet>
          <title>Ariel Gerstein - Front-end developer</title>
          <meta
            name="description"
            content="I am a front-end developer passionate about the web and new technologies. I enjoy learning about Javascript, ES6, React, Redux, Functional Programming and design."
          />
          <meta
            name="keywords"
            content="arielgerstein, portfolio, developer, javascript"
          />
        </Helmet>
        <Header />
        <div>{children()}</div>
        <Footer />
        <style jsx global>
          {`
        @font-face {
          font-family: "Inter UI";
          src: url("${InterUIRegularWoff2Font}") format("woff2"),
            url("${InterUIRegularWoffFont}") format("woff");
          font-weight: 400;
          font-style: normal;
        }

        @font-face {
          font-family: "Inter UI";
          src: url("${InterUIMediumWoff2Font}") format("woff2"),
            url("${InterUIMediumWoffFont}") format("woff");
          font-weight: 500;
          font-style: normal;
        }

        body {
          font-family: "Inter UI", Helvetica, Arial, sans-serif;
          font-weight: ${styleVariables.fontWeights.regular};
        }

        h1, h2, h3, h4, h5, h6 {
          font-weight: ${styleVariables.fontWeights.medium};
        }

        a {
          color: currentColor;
          text-decoration: underline;
        }

        a:hover {
          color: ${styleVariables.colors.black};
        }

        // Set default size for emojis generated via twemoji
        img.emoji {
          width: 1.25em;
        }

        .list-unstyled {
          padding: 0;
          margin: 0;
          list-style-type: none;
        }
      `}
        </style>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
