import Mainmenu from "./Mainmenu";
import Drinks from "./Drinks";
import Sidedishes from "./Sidedishes";
import Deserts from "./Deserts";
import { useState } from "react";
import { motion } from 'framer-motion';

function HomeMenu() {
        let [currentMenu, setCurrentMenu] = useState("Main Menu");

        function updateCurrentMenu() {
                if (currentMenu == "Main Menu") {
                  return <Mainmenu />;
                } else if (currentMenu == "Sides") {
                  return <Sidedishes />;
                } else if (currentMenu == "Drinks") {
                  return <Drinks />;
                } else if (currentMenu == "Deserts") {
                  return <Deserts />;
                }
        }

  return (
    <>
      <section className="sm:px-8 md:px-10 mx-auto px-5 my-25">
        <motion.h3
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-medium text-lg md:text-2xl lg:text-4xl text-center flex flex-col items-center"
        >
          Our Menu
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-2 justify-center items-center mt-4"
        >
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
        </motion.div>

        {/* Types */}
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-3 my-6 items-center justify-center"
        >
          <button
            onClick={() => setCurrentMenu("Main Menu")}
            className={
              currentMenu == "Main Menu"
                ? "bg-orange-400 text-black border-none px-3 py-2 md:px-4 md:py-2 sc md:text-base rounded-sm font-normal sm:font-medium"
                : "border-orange-400 border text-orange-400 px-1 py-0.5 md:px-4 md:py-1 md:text-base  rounded-sm font-normal sm:font-medium"
            }
          >
            Main Menu
          </button>
          <button
            onClick={() => setCurrentMenu("Sides")}
            className={
              currentMenu == "Sides"
                ? "bg-orange-400 text-black border-none px-3 py-2 md:px-4 md:py-2 sc md:text-base rounded-sm font-normal sm:font-medium"
                : "border-orange-400 border text-orange-400 px-1 py-0.5 md:px-4 md:py-1 md:text-base  rounded-sm font-normal sm:font-medium"
            }
          >
            Sides
          </button>
          <button
            onClick={() => setCurrentMenu("Drinks")}
            className={
              currentMenu == "Drinks"
                ? "bg-orange-400 text-black border-none px-3 py-2 md:px-4 md:py-2 sc md:text-base rounded-sm font-normal sm:font-medium"
                : "border-orange-400 border text-orange-400 px-1 py-0.5 md:px-4 md:py-1 md:text-base  rounded-sm font-normal sm:font-medium"
            }
          >
            Drinks
          </button>
          <button
            onClick={() => setCurrentMenu("Deserts")}
            className={
              currentMenu == "Deserts"
                ? "bg-orange-400 text-black border-none px-3 py-2 md:px-4 md:py-2 sc md:text-base rounded-sm font-normal sm:font-medium"
                : "border-orange-400 border text-orange-400 px-1 py-0.5 md:px-4 md:py-1 md:text-base  rounded-sm font-normal sm:font-medium"
            }
          >
            Desserts
          </button>
        </motion.section>

        {/* Menu Items */}

        <section className="flex flex-col justify-start items-center my-15">
          <h4 className="text-lg md:text-xl lg:text-2xl md:font-semibold lg:font-bold font-medium">
            {currentMenu}
          </h4>
          {updateCurrentMenu()}
        </section>
      </section>
    </>
  );
}

export default HomeMenu