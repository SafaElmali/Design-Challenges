import * as React from "react";

function SvgWhatsapp(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 61 61"
      {...props}
    >
      <defs>
        <clipPath id="whatsapp_svg__a">
          <circle cx={30.5} cy={30.5} r={30.5} fill="#fff" />
        </clipPath>
      </defs>
      <circle data-name="Mask" cx={30.5} cy={30.5} r={30.5} fill="#fff" />
      <g data-name="Bitmap" clipPath="url(#whatsapp_svg__a)">
        <image
          data-name="Bitmap"
          width={64}
          height={64}
          transform="translate(-1 -3)"
          xlinkHref="data:image/png;base64,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"
        />
      </g>
    </svg>
  );
}

export default SvgWhatsapp;