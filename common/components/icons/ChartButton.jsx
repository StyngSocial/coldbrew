const ChartButton = ({ active }) => {
  const fill = active ? "#50c979" : "none";
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      data-reactroot=""
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke="#50c878"
        d="M2 2V22H22"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke="#50c878"
        fill={fill}
        d="M8 8H6V18H8V8Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke="#50c878"
        fill={fill}
        d="M14 2H12V18H14V2Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke="#50c878"
        fill={fill}
        d="M20 12H18V18H20V12Z"
      ></path>
    </svg>
  );
};

export default ChartButton;
