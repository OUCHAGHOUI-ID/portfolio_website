import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Experience = () => {
  const { state } = useContext(ThemeContext);
  const darkMode = state.darkMode;
  const achievements = [
    "2ème place Hult Prize",
    "Participation à des hackathons internationaux : Water4Future, IGNITIA, Amazon Nova AI Hackathon",
    "Membre du club ILIA",
    "Organisation d'événements techniques",
  ];

  return (
    <div className="mt-12">
      <h4 className={`text-3xl font-semibold ${darkMode ? "text-blue-600" : "text-blue-300"}`}>
        Expériences & Réalisations
      </h4>
      <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
        {achievements.map((a) => (
          <li key={a} className="mb-2">
            {a}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Experience;
