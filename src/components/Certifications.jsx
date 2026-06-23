import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Certifications = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const certs = [
    "Oracle Certified Foundations Associate – AI Foundations",
    "Python Programming – Meta",
    "Machine Learning & AI in Healthcare – Stanford Online",
    "Full Stack Developer – Amazon",
  ];

  return (
    <div className="mt-12">
      <h4 className={`text-3xl font-semibold ${darkMode ? "text-blue-600" : "text-blue-300"}`}>
        Certifications
      </h4>
      <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
        {certs.map((c) => (
          <li key={c} className="mb-2">
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Certifications;
