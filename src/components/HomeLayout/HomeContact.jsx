import { motion } from "framer-motion";
import { Link } from "react-router";

let HomeContact = () => {
        return (
          <>
            <section className="flex flex-col justify-center my-25 px-5 sm:px-8 md:px-10">
              <motion.h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="font-semibold text-xl md:text-4xl lg:text-4xl text-center flex flex-col items-center"
              >
                Contact Us
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex gap-2 justify-center items-center my-5"
              >
                <p className="h-2 w-2 rounded-full bg-orange-400"></p>
                <p className="h-2 w-2 rounded-full bg-orange-400"></p>
                <p className="h-2 w-2 rounded-full bg-orange-400"></p>
              </motion.div>

              <motion.form
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                action="/"
                className="flex flex-col justify-center my-5 gap-5 md:items-center"
              >
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-500/50 p-2 rounded-sm font-medium placeholder:text-gray-500 shadow-[0_0_0px_1px_#f0f0f0] md:w-100 lg:w-160  md:py-3 lg:py-4 focus:outline-amber-400/80 duration-200 placeholder:text-lg placeholder:font-medium"
                />
                <input
                  type="phone"
                  placeholder="Phone"
                  className="border border-gray-500/50 p-2 rounded-sm font-medium placeholder:text-gray-500 shadow-[0_0_0px_1px_#f0f0f0] md:w-100 lg:w-160  md:py-3 lg:py-4 focus:outline-amber-400/80 duration-200 placeholder:text-lg placeholder:font-medium"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-500/50 p-2 rounded-sm font-medium placeholder:text-gray-500 shadow-[0_0_0px_1px_#f0f0f0] md:w-100 lg:w-160 md:py-3 lg:py-4 focus:outline-amber-400/80 duration-200 placeholder:text-lg placeholder:font-medium"
                />
                <button
                  type="button"
                  className="bg-amber-400/80 p-2 rounded-sm font-medium text-lg shadow-[0_0_0px_1px_#f0f0f0] md:w-80 lg:w-120 md:py-2 lg:py-4"
                >
                  Contact Us
                </button>
              </motion.form>
            </section>
          </>
        );
}

export default HomeContact;