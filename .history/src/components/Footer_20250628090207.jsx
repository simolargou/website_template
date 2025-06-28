// src/components/Footer.jsx
import {
  FiGithub,
  FiTwitter,
  FiLinkedin,
  FiGlobe,
  FiYoutube,
} from "react-icons/fi";

const socialLinks = [
  { id: 1, icon: <FiGlobe />, url: "https://www.stoman.me/", label: "Website" },
  { id: 2, icon: <FiGithub />, url: "https://github.com/", label: "GitHub" },
  { id: 3, icon: <FiTwitter />, url: "https://twitter.com/", label: "Twitter" },
  { id: 4, icon: <FiLinkedin />, url: "https://www.linkedin.com/in/", label: "LinkedIn" },
  { id: 5, icon: <FiYoutube />, url: "https://www.youtube.com/c/", label: "YouTube" },
];

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-primary-light dark:border-background-dark bg-background-light dark:bg-background-dark">
      <div className="py-6 flex flex-col items-center font-bitcount">
        <p className="text-3xl sm:text-4xl text-text-light dark:text-text-dark mb-4">
          Follow me
        </p>

        <ul className="flex gap-4 sm:gap-6">
          {socialLinks.map(({ id, icon, url, label }) => (
            <li key={id}>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-gray-400 hover:text-text-light dark:hover:text-indigo-400 
                            dark:bg-background-dark  
                           shadow-sm p-4 rounded-lg transition duration-300"
              >
                <span className="text-xl sm:text-2xl md:text-3xl">{icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
