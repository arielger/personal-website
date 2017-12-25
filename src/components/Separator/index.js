import React from "react";

const Separator = () => (
  <div>
    <hr />
    <style jsx>
      {`
        hr {
          display: block;
          height: 1px;
          border: 0;
          border-top: 1px solid rgba(0, 0, 0, 0.1);
          margin: 0;
          padding: 0;
        }
      `}
    </style>
  </div>
);

export default Separator;
