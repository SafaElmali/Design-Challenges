import * as React from "react";

function SvgBookmark(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 26 24"
      {...props}
    >
      <path d="M0 0h26v24H0z" fill="none" />
      <path
        data-name="Path"
        d="M9.75 4h6.5a2.088 2.088 0 012.167 2v14L13 17l-5.417 3V6A2.088 2.088 0 019.75 4"
        fill="none"
        stroke="#141a31"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
}

export default SvgBookmark;
