import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function AnimatedLink({ to, children }) {
  const navigate = useNavigate();
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setIsAnimating(true);

    // Wait for animation duration before navigating
    setTimeout(() => {
      navigate(to);
    }, 300); // match the animation duration
  };

  return (
    <a
      href={to}
      onClick={handleClick}
      className={`inline-block transition-opacity duration-300 ${
        isAnimating ? "opacity-0" : "opacity-100"
      }`}
    >
      {children}
    </a>
  );
}
