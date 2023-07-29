import React from "react";

function Link({ href, label }) {
  return (
    <a href={href} className="ui-link">
      {label}
    </a>
  );
}

export default Link;
