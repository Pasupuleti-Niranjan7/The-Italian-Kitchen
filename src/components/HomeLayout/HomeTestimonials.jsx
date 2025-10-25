
import { motion } from 'framer-motion';
import StarRating from '../../StarRating';

function HomeTestimonials() {

  // testimonial
  let testimonial = [
    {
      id: 1,
      custName: "Maria L.",
      rating: 5,
      review:
        "Niranjan's Food is a gem! The pasta is always perfectly cooked, and the sauces are bursting with flavor. Highly recommend!",
    },
    {
      id: 2,
      custName: "Paletee long",
      rating: 4,
      review:
        "I had my birthday dinner here, and it was fantastic. The service was impeccable, and the food was out of this world. I'll be back for sure!",
    },
    {
      id: 3,
      custName: "Morata lautaro",
      rating: 5,
      review:
        "Best Italian food in town! From the appetizers to the desserts, everything was delicious. The atmosphere is so charming and cozy.",
    },
  ];

  return (
    <>
      <section className="px-5 sm:px-8 md:px-10 flex flex-col justify-center my-35">
        <motion.h3
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="font-medium text-lg md:text-2xl lg:text-4xl text-center flex flex-col items-center"
        >
          Testimonials
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex gap-2 justify-center items-center mt-3"
        >
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
          <p className="h-2 w-2 rounded-full bg-orange-400"></p>
        </motion.div>

        {/* Testimonial Section */}
        <section className="my-10 flex flex-col md:flex-row gap-5 justify-center">
          {testimonial.map((cust) => (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, amount: 0.3 }}
              key={cust.id}
              className="shadow-[0_0_1px_2px_#f0f0f0] p-4 lg:w-[300px] lg:h-[190px] xl:w-[380px] xl:h-[200px] bg-gray-400/10"
            >
              <h2 className="font-semibold text-lg">{cust.custName}</h2>
              <div className="text-amber-300 text-base font-medium">
                {<StarRating rating={cust.rating} />}
              </div>
              <p className="font-medium text-gray-600">{cust.review}</p>
            </motion.div>
          ))}
        </section>
      </section>
    </>
  );
}

export default HomeTestimonials