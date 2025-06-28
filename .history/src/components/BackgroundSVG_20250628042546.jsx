// BackgroundSVG.jsx
const BackgroundSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 2000 1500"
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1,
      width: '100%',
      height: '100%',
      pointerEvents: 'none', // So it doesn't block clicks
    }}
  >
    <rect fill="#ffffff" width="2000" height="1500" />
    <defs>
      {/* Your defs go here */}
    </defs>
    <rect fill="url(#a)" width="100%" height="100%" />
    <rect fill="url(#b)" width="100%" height="100%" />
    <rect fill="url(#h)" width="100%" height="100%" />
    <rect fill="url(#c)" width="100%" height="100%" />
    <rect fill="url(#d)" width="100%" height="100%" />
    <rect fill="url(#e)" width="100%" height="100%" />
    <rect fill="url(#f)" width="100%" height="100%" />
    <rect fill="url(#g)" width="100%" height="100%" />
  </svg>
);

export default BackgroundSVG;
