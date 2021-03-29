const HomeButton = ({ active }) => {
  const fill = active ? "#50c878" : "none";
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
        fill={fill}
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke="#50c878"
        fill="#f8f9fa"
        d="M17 10L12 6L7 10V16H17V10Z"
      ></path>
      <path
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="1"
        stroke="#50c878"
        d="M12.5 12H11.5V16H12.5V12Z"
      ></path>
    </svg>
  );
};

export default HomeButton;
