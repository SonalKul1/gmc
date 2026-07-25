export default function IndianFlagSvg() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="120"
      height="80"
      version="1.1"
      viewBox="0 0 450 300"
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform="translate(225 150)" stroke="#008" strokeWidth="0" fill="#008">
        <circle r="43" strokeWidth="6" fillOpacity="0" />
        <circle r="8" />
        <g id="quarter">
          <g id="spoke">
            <circle r="2" cy="40" transform="rotate(7.5)" />
            <polygon points="0,4 1.4,16 0,42 -1.4,16" />
          </g>
          <use xlinkHref="#spoke" transform="rotate(15)" />
          <use xlinkHref="#spoke" transform="rotate(30)" />
          <use xlinkHref="#spoke" transform="rotate(45)" />
          <use xlinkHref="#spoke" transform="rotate(60)" />
          <use xlinkHref="#spoke" transform="rotate(75)" />
        </g>
        <use xlinkHref="#quarter" transform="rotate(90)" />
        <use xlinkHref="#quarter" transform="rotate(180)" />
        <use xlinkHref="#quarter" transform="rotate(270)" />
      </g>
    </svg>
  );
}
