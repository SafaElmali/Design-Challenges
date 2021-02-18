import * as React from "react";

function SvgSearch(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 34 34"
      {...props}
    >
      <path d="M0 0h34v34H0z" fill="none" />
      <circle
        cx={9.917}
        cy={9.917}
        r={9.917}
        transform="translate(4.25 4.25)"
        fill="none"
        stroke="#8e97b6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2.125}
      />
      <path
        data-name="Path"
        d="M29.75 29.75l-8.5-8.5"
        fill="none"
        stroke="#8e97b6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={2.125}
      />
    </svg>
  );
}

export default SvgSearch;
