const ColdbrewButton = ({ active }) => {
  const fill = active ? "#58c324" : "none";
  const stroke = active ? "#f8f9fa" : "#58c324";
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill=""
      xmlns="http://www.w3.org/2000/svg"
      data-reactroot=""
    >
      {/* Right bean */}
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={stroke}
        fill={fill}
        d="M18.5996 14.9479C21.0108 14.5021 22.473 11.4772 21.8655 8.1917C21.2581 4.90618 18.811 2.60412 16.3998 3.04992C13.9886 3.49572 12.5264 6.52056 13.1338 9.80608C13.7413 13.0916 16.1884 15.3937 18.5996 14.9479Z"
      ></path>
      {/* Right Squiggle */}
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={stroke}
        fill={fill}
        d="M17.4902 5.65002C17.6802 6.73002 16.5302 6.94002 16.7302 8.02002C16.9202 9.10002 18.0802 8.90002 18.2702 9.98002C18.4602 11.06 17.3102 11.27 17.5102 12.35"
      ></path>
      {/* Left Bean */}
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={stroke}
        fill={fill}
        d="M7.6003 20.9482C10.0115 20.5024 11.4737 17.4775 10.8663 14.192C10.2588 10.9065 7.81171 8.60443 5.40052 9.05023C2.98933 9.49603 1.52711 12.5209 2.13456 15.8064C2.74201 19.0919 5.18911 21.394 7.6003 20.9482Z"
      ></path>
      {/* Left squiggle */}
      <path
        strokeLinejoin="round"
        strokeLinecap="round"
        strokeWidth="1"
        stroke={stroke}
        fill={fill}
        d="M6.49 11.65C6.68 12.73 5.53 12.94 5.73 14.02C5.92 15.1 7.08 14.9 7.27 15.98C7.46 17.06 6.31 17.27 6.51 18.35"
      ></path>
    </svg>
  );
};

export default ColdbrewButton;
