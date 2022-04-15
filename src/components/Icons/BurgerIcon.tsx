import * as React from "react";
const BurgerIcon = React.forwardRef<SVGSVGElement>((props, svgRef) => (
  <svg
    width={16}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={svgRef}
    {...props}
  >
    <path
      d="M0 9h16M0 1h16"
      stroke="#222"
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
));
export default BurgerIcon;
