import React, { useContext } from "react";
import heroBg from "../assets/webdev.svg";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import cloud from "../assets/cloudBg.png";
import cloudDark from "../assets/cloudDark.png";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div
        style={
          darkMode
            ? { backgroundImage: `url('${cloud}')`, backgroundSize: "cover" }
            : { backgroundImage: `url('${cloudDark}'`, backgroundSize: "cover" }
        }
      >
        <main
          className="mx-auto max-w-7xl px-4 sm:px-6 md:mt-0 lg:px-8 flex flex-col md:flex-row items-center justify-center md:justify-between h-screen"
          id="/"
        >
          <div className="sm:text-center lg:text-left">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <motion.span
                className={darkMode ? "block text-black" : " text-white"}
              >
                Idriss Ouchaghoui
              </motion.span>
              <span className="block text-blue-500 z-0 lg:inline">
                AI Engineer & Full Stack Developer
              </span>
            </h1>
            <p
              className={
                darkMode
                  ? "mt-3 text-base text-black sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
                  : "mt-3 text-base text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              }
            >
              Étudiant ingénieur en Informatique, spécialisé en Ingénierie Logicielle
              et Intelligence Artificielle. Passionné par le Machine Learning,
              le Deep Learning et l’IA Générative, je conçois des applications
              web intelligentes et scalables.
            </p>
            <div className="flex md:justify-start mt-6">
                <a href="https://www.linkedin.com/in/idriss-ouchaghoui-2b5ab9340" target="_blank" rel="noreferrer" className="mr-4">
                  <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                    Voir mes projets
                  </button>
                </a>
              <Link to="contact" smooth={true} duration={600}>
                <button className="px-6 py-3 bg-transparent border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <motion.img
            initial="hidden"
            whileInView={"visible"}
            variants={{
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  type: "spring",
                },
              },
              hidden: { opacity: 1, y: 80 },
            }}
            src={heroBg}
            alt=""
            className="md:w-3/6 hidden sm:block"
          />
        </main>
      </div>
    </>
  );
};

export default Home;
