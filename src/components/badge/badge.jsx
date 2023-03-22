import React from "react";
import "./badge.css";

const Badges = () => {
  return (
    <div className="foo-container">
      <a href="https://github.com/wafellofazztrack/lectronic-backend">
        <img
          className="foo"
          src="https://img.shields.io/static/v1?label=wafellofazztrack&message=lectronic-backend&color=blue&logo=go"
          alt="Go repository badge"
        />
      </a>
      <a href="https://github.com/wafellofazztrack/lectronic-frontend">
        <img
          className="foo"
          src="https://img.shields.io/static/v1?label=wafellofazztrack&message=lectronic-frontend&color=blue&logo=react"
          alt="React repository badge"
        />
      </a>
    </div>
  );
};

export default Badges;
