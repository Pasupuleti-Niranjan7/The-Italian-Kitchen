import { motion } from "framer-motion";

let HomeServices = () => {
        // Our Services
        let services = [
          {
            id: 1,
            img: "/public/services1.jpg",
            heading: "Dine-In Experience",
            details:
              "Enjoy a cozy and welcoming atmosphere perfect for any occasion. Our attentive staff and beautiful decor ensure a memorable dining experience.",
          },
          {
            id: 2,
            img: "/public/services2.jpg",
            heading: "Takeaway & Delivery",
            details:
              "Craving Italian food at home? Our takeaway and delivery services ensure you can enjoy our delicious dishes wherever you are.",
          },
        ];

        return (
          <>
            <section className="max-w-[1300px] mx-auto px-5 flex flex-col items-center my-10">
              <h3
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="font-medium text-lg md:text-2xl lg:text-4xl text-center flex flex-col items-center"
              >
                Services
              </h3>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true, amount: 0.3 }}
                className="flex gap-2 justify-center items-center my-3"
              >
                <p className="h-2 w-2 rounded-full bg-orange-400"></p>
                <p className="h-2 w-2 rounded-full bg-orange-400"></p>
                <p className="h-2 w-2 rounded-full bg-orange-400"></p>
              </motion.div>

              {/* Services Section */}
              <section className=" flex flex-col md:flex-row my-5 gap-5">
                {services.map((service) => (
                  <div
                    key={service.id}
                    className="flex flex-col items-center bg-white p-1 shadow-[0_0_1px_2px_#f0f0f0] rounded-md gap-1 md:w-90 lg:w-120 2xl:w-140"
                  >
                    <img
                      src={service.img}
                      alt=""
                      className="rounded-sm max-sm:w-full md:w-150 lg:w-140 2xl:w-135"
                    />
                    <h3 className="text-lg font-medium border-l-0 border-r-0 border-b-3 border-amber-400 rounded-lg py-1">
                      {service.heading}
                    </h3>
                    <p className="text-center text-base text-pretty px-10">
                      {service.details}
                    </p>
                  </div>
                ))}
              </section>
            </section>
          </>
        );
}
export default HomeServices