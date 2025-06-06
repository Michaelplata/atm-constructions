type ILogoProps = {
  xl?: boolean;
  className?: string;
};

const Logo = (props: ILogoProps) => {
  const size = props.xl ? '300' : '120';
  const fontStyle = props.xl
    ? 'font-semibold text-3xl'
    : 'font-semibold text-xl';

  return (
    <span className={`inline-flex items-center text-gray-900 ${fontStyle}`}>
      <svg
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 400 400"
        width={size}
        height={size}
      >
        <defs>
          <style>
            {`
              .st0 { fill: #28578e; }
              .st1, .st2 { isolation: isolate; }
              .st3 { fill: #1b3668; }
              .st2 {
                font-family: Arial-BoldMT, Arial;
                font-size: 34px;
                font-weight: 700;
              }
              .st4 { fill: #ffffff; }
              .st5 {
                fill: none;
                stroke: #c45a43;
                stroke-width: 4px;
              }
              .st6 { display: none; }
            `}
          </style>
        </defs>

        {/* White background between circles */}
        <circle cx="206.4" cy="203.3" r="106.4" fill="#ffffff" />

        <g id="Layer_11">
          <circle className="st5" cx="206.4" cy="203.3" r="106.4" />
          <circle className="st0" cx="206.4" cy="203.3" r="90.9" />
          <rect
            className="st4"
            x="50"
            y="192.9"
            width="320.2"
            height="54.4"
            rx="8"
          />
          <path
            className="st4"
            d="M143.8,194.9v-25.1h21.1l.2,25.1h6.3l-.7-37.7h9v22.6h3.1v-45.1h16.1l.2,54.2h4.1v-43h23.7l.2,57.4h5l-.6-43.3h13.3v35.6h3v-10.8h24.9v11h24"
          />
          <path className="st4" d="M130.6,193.9" />
          <rect className="st3" x="188.5" y="167.5" width="4.6" height="6" />
          <g className="st1">
            <g className="st1">
              <text className="st2" transform="translate(55.9 233.1)">
                <tspan x="0" y="0">
                  ATM Constructions
                </tspan>
              </text>
            </g>
          </g>
          <rect className="st3" x="188.5" y="180.7" width="4.6" height="6" />
          <rect className="st3" x="216.8" y="152.1" width="4.6" height="6" />
          <rect className="st3" x="261.7" y="190.9" width="4.6" height="6" />
        </g>
      </svg>
    </span>
  );
};

export { Logo };
