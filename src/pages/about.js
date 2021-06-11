import React from "react";
import Layout from "@theme/Layout";

const about = () => {
  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "20px",
        }}
      >
        <p>
          About page <code>pages/hello.js</code>   
        </p>
      </div>{" "}
    </Layout>
  );
};

export default about;
