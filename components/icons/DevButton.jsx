const DevButton = ({ active }) => {
  const fill = active ? "#50c878" : "none";
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      data-reactroot=""
    >
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke="#50c878"
        d="M17.5 16.5L22 12L17.5 7.5"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke="#50c878"
        d="M6.5 16.5L2 12L6.5 7.5"
      ></path>
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke="#50c878"
        d="M8.92999 20L15.07 4"
      ></path>
    </svg>
  );
};

export default DevButton;
