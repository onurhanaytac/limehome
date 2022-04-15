import * as React from "react";
const HomeIcon = React.forwardRef<SVGSVGElement>((props, svgRef) => (
  <svg
    width={32}
    height={32}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <circle cx={16} cy={16} r={16} fill="#E8A746" />
    <circle cx={16} cy={16} r={16} fill="#BBC2B9" />
    <g clipPath="url(#HomeIcon_svg__clip0)">
      <path
        d="M20.67 15.497l-1.306-1.306a.106.106 0 01-.03-.073v-2.493a.417.417 0 00-.417-.416h-1.25a.417.417 0 00-.417.416v.201a.105.105 0 01-.064.096.104.104 0 01-.114-.022l-.986-.986a.417.417 0 00-.589 0l-4.583 4.583a.417.417 0 00.294.712h.521a.104.104 0 01.104.104v4.062a.417.417 0 00.417.417h2.396a.105.105 0 00.104-.104v-1.98a1.042 1.042 0 112.083 0v1.98a.104.104 0 00.105.104h2.395a.417.417 0 00.417-.417v-4.062a.104.104 0 01.104-.104h.521a.416.416 0 00.294-.712z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="HomeIcon_svg__clip0">
        <path fill="#fff" d="M11 11h10v10H11z" />
      </clipPath>
    </defs>
  </svg>
));
export default HomeIcon;
