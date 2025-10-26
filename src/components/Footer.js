import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
// Tailwind migration: inline classes

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-border bg-foreground/[0.02]">
      <div className="container py-10">
        <div className="flex flex-col md:flex-row gap-8 md:gap-4 justify-between">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Rohit</h3>
            <p className="max-w-md text-sm text-muted-foreground">
              Software Engineer with a passion for creating innovative,
              scalable, and high-performance solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#projects"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className="hover:text-primary transition-colors"
                  href="#skills"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <ul className="mt-3 flex items-center gap-4">
              <li>
                <a
                  href="https://www.linkedin.com/in/rohit8953/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
                >
                  <FaLinkedin size={22} />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/rohitnishad06"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-gray-400 hover:text-gray-200 transition-colors duration-200"
                >
                  <FaGithub size={22} />
                </a>
              </li>
              <li>
                <a
                  href="mailto:rohitnishad123467@gmail.com"
                  aria-label="Email"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  <FaEnvelope size={22} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-4 text-center text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Rohit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
