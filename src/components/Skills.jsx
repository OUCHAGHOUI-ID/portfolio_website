import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const skills = [
    {
      category: "Programming",
      items: ["Python", "Java", "JavaScript", "C++", "PHP"],
    },
    {
      category: "Web Development",
      items: ["React", "Node.js", "Express.js", "HTML", "CSS", "MERN Stack"],
    },
    { category: "Database", items: ["MongoDB", "SQL", "MySQL"] },
    {
      category: "Artificial Intelligence",
      items: [
        "Machine Learning",
        "Deep Learning",
        "IA Générative",
        "NLP",
        "Computer Vision",
        "Graph Neural Networks",
      ],
    },
    { category: "AI Frameworks", items: ["TensorFlow", "PyTorch", "Scikit-learn"] },
    { category: "Tools", items: ["Git", "GitHub", "Agile", "Scrum", "Jira", "Postman"] },
  ];

  return (
    <div className={darkMode ? "mt-8 text-black" : "mt-8 text-white"}>
      <h4 className={`mt-12 text-3xl font-semibold ${darkMode ? "text-blue-600" : "text-blue-300"}`}>
        Compétences
      </h4>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {skills.map((s) => (
          <div key={s.category} className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800">
            <h5 className={`font-semibold mb-2 ${darkMode ? "text-blue-600" : "text-blue-300"}`}>{s.category}</h5>
            <ul className="list-disc list-inside">
              {s.items.map((it) => (
                <li key={it} className="text-sm mb-1">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
