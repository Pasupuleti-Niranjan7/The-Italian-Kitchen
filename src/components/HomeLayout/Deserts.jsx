
function Deserts() {

  // Deserts 
  let desserts = [
    {
      id: 1,
      img: "/public/dessert1.jpg",
      name: "Tiramisu",
      details:
        "Traditional Italian dessert with layers of espresso-soaked ladyfingers, mascarpone cheese, and cocoa powder.",
      price: "$6.95",
    },
    {
      id: 2,
      img: "/public/dessert2.jpg",
      name: "Panna Cotta",
      details:
        "Creamy and smooth Italian custard, served with a berry compote.",
      price: "$5.95",
    },
    {
      id: 3,
      img: "/public/dessert3.jpg",
      name: "Cannoli Siciliani",
      details:
        "Crispy pastry shells filled with sweet ricotta cheese and chocolate chips.",
      price: "$4.95",
    },
  ];
  
  return (
    <>
      {desserts.map((dessert) => (
        <section
          key={dessert.id}
          className="flex flex-col md:flex-row gap-2 bg-white shadow-[0_0_1px_2px_#f0f0f0] my-5 md:pr-4 md:w-[750px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] rounded-md"
        >
          <img
            src={dessert.img}
            alt=""
            className="h-[290px] w-[590px] sm:w-[700px] sm:h-[300px] md:h-[120px] md:w-[200px] p-1"
          />
          <div className="max-sm:mt-3 md:mt-5 flex flex-col items-stretch w-full">
            <div className="flex flex-col md:justify-between">
              <h2 className="text-lg font-medium px-1 md:text-xl">
                {dessert.name}
              </h2>
              <p className="text-normal text-sm p-1 text-balance md:text-base ">
                {dessert.details}
              </p>
            </div>
            <p className="text-end m-2 font-medium">{dessert.price}</p>
          </div>
        </section>
      ))}
    </>
  );
}

export default Deserts;