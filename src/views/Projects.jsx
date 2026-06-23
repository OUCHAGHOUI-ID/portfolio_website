import React, { useContext } from "react";
import ProjectCard from "../components/ProjectCard";
import { ThemeContext } from "../themeProvider";

const Projects = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="projects"
      className={darkMode ? "bg-white text-black" : "bg-gray-900 text-white"}
    >
      <div className="max-w-7xl mx-auto x-4 sm:px-6 lg:px-8 px-4  pt-24 pb-12">
        <h2 className="text-5xl font-bold px-4 md:px-0 text-center">Projets</h2>
        <h4 className="mt-16 text-3xl font-semibold text-blue-600">Projets sélectionnés</h4>
        <div className="mt-8 flex flex-wrap justify-center items-stretch">
          <ProjectCard
            title="Détection de visages avec Graph Neural Networks"
            description="Modèle basé sur les relations contextuelles utilisant le Deep Learning et des Graph Neural Networks pour améliorer la détection faciale dans des scènes complexes."
            tech="PyTorch, GNN, Computer Vision, Deep Learning"
          />
          <ProjectCard
            title="Application d'Optimisation — Recherche Opérationnelle"
            description="Application GUI en Python implémentant des algorithmes d'optimisation et de graphe (Simplexe, Grand M, Deux phases, Branch & Bound, Dijkstra, Bellman-Ford, Kruskal, Floyd-Warshall)."
            tech="Python, Tkinter/Qt, Algorithmes d'optimisation"
          />
          <ProjectCard
            title="Applications Web Full Stack (MERN)"
            description="Suite d'applications MERN incluant TaskMe (gestion de tâches) et une plateforme étudiante avec authentification et tableau de bord."
            tech="MongoDB, Express, React, Node.js (MERN)"
          />
        </div>
        <a
          href="hello"
          class=" w-32 flex items-center py-4 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-auto mt-4"
        >
          Show More
          <svg
            class="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Projects;
