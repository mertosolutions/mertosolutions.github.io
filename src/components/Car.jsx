// Side-view racing car facing right. Wheels spin via CSS (.wheel).
export default function Car({ className = '' }) {
  return (
    <svg className={`car ${className}`} viewBox="0 0 124 44" aria-hidden="true">
      <defs>
        <linearGradient id="carBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#7ff4ff" />
          <stop offset="1" stopColor="#0097b8" />
        </linearGradient>
      </defs>
      <path className="flame" d="M2 27 L-14 24 L-4 28 L-16 31 L2 31Z" />
      <path d="M2 16h16v3H12v5h-3v-5H2z" fill="#56616b" />
      <path d="M6 31Q6 22 18 20l22-2 12-10q2-2 6-2h24q4 0 6 3l8 9 14 3q6 2 6 9z" fill="url(#carBody)" />
      <path d="M55 11h7v7H48zM66 11h16l7 7H66z" fill="#0b0e11" opacity=".85" />
      <path d="M8 27h104" stroke="#0b0e11" strokeWidth="1.5" opacity=".35" />
      <rect x="6" y="23" width="4" height="3" fill="var(--hot)" />
      <ellipse cx="116" cy="25" rx="3" ry="2" fill="#fff" />
      {[31, 93].map((cx) => (
        <g key={cx} transform={`translate(${cx} 32)`}>
          <circle r="8" fill="#0b0e11" stroke="#9fb0be" strokeWidth="1.5" />
          <g className="wheel">
            <path d="M-5 0h10M0 -5v10M-3.5 -3.5l7 7M3.5 -3.5l-7 7" stroke="#9fb0be" strokeWidth="1.2" />
          </g>
        </g>
      ))}
    </svg>
  );
}
