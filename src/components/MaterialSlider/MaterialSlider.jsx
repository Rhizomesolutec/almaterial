const items = [
  "Structural Steel",
  "Marine-Grade Fasteners",
  "Industrial Hardware",
  "Corrosion-Resistant Materials",
  "Project-Based Sourcing",
  "Quality-Assured Supply",
  "On-Time Delivery",
  "Construction Materials",
  "Industrial Tools",
  "Marine Solutions",
];

export default function MaterialSlider() {
  return (
    <div className="w-full overflow-hidden relative">
      <style>
        {`
          @keyframes material-marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .material-track {
            display: flex;
            width: 200%;
            background: #1666ad;
            padding: 14px 0;
          }

          .material-wrapper {
            display: flex;
            animation: material-marquee 25s linear infinite;
          }

          .material-item {
            white-space: nowrap;
            padding: 0;
            flex-shrink: 0;
            margin-right: 4px;
          }

          .material-pill {
            color: #fff;
            padding: 0.5rem 1.5rem;
            font-size: 0.9rem;
            font-weight: 500;
          }
        `}
      </style>

      <div className="material-track">
        <div className="material-wrapper">
          {items.map((label, i) => (
            <div key={i} className="material-item">
              <span className="material-pill">{label}</span>
            </div>
          ))}
        </div>
        {/* dont remove this: ADDED FOR SMOOTH SCROLLING */}
        <div className="material-wrapper" aria-hidden="true">
          {items.map((label, i) => (
            <div key={`dup-${i}`} className="material-item">
              <span className="material-pill">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
