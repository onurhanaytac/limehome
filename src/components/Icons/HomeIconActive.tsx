import * as React from "react";
const HomeIconActive = React.forwardRef<SVGSVGElement>((props, svgRef) => (
  <svg
    width={48}
    height={48}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <circle cx={24} cy={24} r={24} fill="#E8A746" />
    <circle cx={24} cy={24} r={24} fill="#111" />
    <g clipPath="url(#HomeIconActive_svg__clip0)">
      <path
        d="M30.537 23.296l-1.828-1.828a.145.145 0 01-.043-.104v-3.49a.583.583 0 00-.583-.582h-1.75a.583.583 0 00-.583.583v.281a.145.145 0 01-.09.135.146.146 0 01-.16-.032l-1.38-1.38a.583.583 0 00-.824 0l-6.417 6.417a.583.583 0 00.412.996h.73a.146.146 0 01.145.145v5.688a.583.583 0 00.584.583h3.354a.145.145 0 00.146-.146v-2.77a1.458 1.458 0 012.916 0v2.77a.146.146 0 00.146.146h3.354a.583.583 0 00.584-.583v-5.688a.146.146 0 01.146-.145h.729a.583.583 0 00.412-.996z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="HomeIconActive_svg__clip0">
        <path fill="#fff" d="M17 17h14v14H17z" />
      </clipPath>
    </defs>
  </svg>
));
export default HomeIconActive;
