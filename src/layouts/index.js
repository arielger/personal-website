import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import InterUIRegularWoffFont from "../fonts/Inter-UI-Regular.woff";
import InterUIRegularWoff2Font from "../fonts/Inter-UI-Regular.woff2";
import InterUIMediumWoffFont from "../fonts/Inter-UI-Medium.woff";
import InterUIMediumWoff2Font from "../fonts/Inter-UI-Medium.woff2";
import Header from "../components/Header";

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Ariel Gerstein - Front-end developer"
      meta={[
        { name: "description", content: "Sample" },
        {
          name: "keywords",
          content: "portfolio, development, programming, front-end development",
        },
      ]}
    />
    <Header />
    <div>{children()}</div>
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
        }
      `}
    </style>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
