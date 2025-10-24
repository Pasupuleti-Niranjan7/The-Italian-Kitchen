
function Drinks() {
  // Drinks
  let drinks = [
    {
      id: 1,
      img: "/public/drinks1.jpg",
      name: "Italian Red Wine",
      details: "A glass of rich and robust Italian red wine.",
      price: "$7.00",
    },
    {
      id: 2,
      img: "/public/drinks2.jpg",
      name: "Limoncello Spritz",
      details: "A refreshing blend of Limoncello, Prosecco, and soda water..",
      price: "$8.00",
    },
    {
      id: 3,
      img: "/public/drinks3.jpg",
      name: "San Pellegrino Sparkling Water",
      details: "Classic Italian sparkling mineral water.",
      price: "$3.00",
    },
  ];
  return (
    <>
      {drinks.map((drink) => (
        <section
          key={drink.id}
          className="flex flex-col md:flex-row gap-2 bg-white shadow-[0_0_1px_2px_#f0f0f0] my-5 md:pr-4 md:w-[750px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] rounded-md"
        >
          <img
            src={drink.img}
            alt=""
            className="h-[290px] w-[590px] sm:w-[700px] sm:h-[300px] md:h-[120px] md:w-[200px] p-1"
          />
          <div className="max-sm:mt-3 md:mt-5 flex flex-col items-stretch w-full">
            <div className="flex flex-col md:justify-between">
              <h2 className="text-lg font-medium px-1 md:text-xl">
                {drink.name}
              </h2>
              <p className="text-normal text-sm p-1 text-balance md:text-base ">
                {drink.details}
              </p>
            </div>
            <p className="text-end m-2 font-medium">{drink.price}</p>
          </div>
        </section>
      ))}
    </>
  );
}

export default Drinks