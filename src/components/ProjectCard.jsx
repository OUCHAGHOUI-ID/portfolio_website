import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ title, description, tech, link }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ type: "spring" }}
      className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-lg dark:bg-gray-800 dark:border-gray-700 m-4 flex-1"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
        {tech && (
          <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">Technologies: {tech}</p>
        )}
        <div className="flex items-center">
          <a
            href={link || 'https://www.linkedin.com/in/idriss-ouchaghoui-2b5ab9340'}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          >
            En savoir plus
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
