// BackgroundSVG.jsx
const BackgroundSVG = () => (
  <svg
    className="fixed top-0 left-0 w-full h-full -z-10"
    viewBox="0 0 576.4 576.4"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <rect id="bg" x="0" y="0" width="576.4" height="576.4" fill="#ffffff" />
    <defs>
      <filter id="f1" x="-200%" y="-200%" width="500%" height="500%">
        <feGaussianBlur stdDeviation="98" />
      </filter>
    </defs>
    <circle cx="82" cy="72" r="288.2" fill="#111111" filter="url(#f1)" />
    <circle cx="254" cy="66" r="288.2" fill="#E1E1E1" filter="url(#f1)" />
    <circle cx="260" cy="33" r="288.2" fill="#BDE0FE" filter="url(#f1)" />
    <circle cx="24" cy="444" r="288.2" fill="#A2D2FF" filter="url(#f1)" />
    <circle cx="403" cy="459" r="288.2" fill="#CDB4DB" filter="url(#f1)" />
  </svg>
);

export default BackgroundSVG;
