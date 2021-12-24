import React from "react";
import PageLayout from "../components/PageLayout";

const NotFoundPage = ({ location }) => (
  <PageLayout location={location}>
    <div className="container">
      <h1>Page not found ⚠️</h1>
      <p>You just hit a route that doesn&#39;t exist.</p>
    </div>
  </PageLayout>
);

export default NotFoundPage;
