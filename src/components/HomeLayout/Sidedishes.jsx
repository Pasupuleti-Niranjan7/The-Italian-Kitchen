import React from "react";

function Sidedishes() {
  // Side dishes
  let sidedishes = [
    {
      id: 1,
      img: "/sides1.jpg",
      name: "Garlic Bread",
      details: "Freshly baked bread topped with garlic butter and parsley.",
      price: "$4.95",
    },
    {
      id: 2,
      img: "/sides2.jpg",
      name: "Caprese Salad",
      details:
        "Slices of ripe tomatoes, fresh mozzarella, and basil, drizzled with extra virgin olive oil and balsamic glaze.",
      price: "$6.95",
    },
    {
      id: 3,
      img: "/sides3.jpg",
      name: "Fried Calamari",
      details:
        "Lightly breaded and fried calamari rings, served with marinara sauce.",
      price: "$8.95",
    },
  ];
  return (
    <>
      {sidedishes.map((sidedish) => (
        <section
          key={sidedish.id}
          className="flex flex-col md:flex-row gap-2 bg-white shadow-[0_0_1px_2px_#f0f0f0] my-5 md:pr-4 md:w-[750px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] rounded-md"
        >
          <img
            src={sidedish.img}
            alt={sidedish.name}
            className="h-[290px] w-[590px] sm:w-[700px] sm:h-[300px] md:h-[120px] md:w-[200px] p-1"
          />
          <div className="max-sm:mt-3 md:mt-5 flex flex-col items-stretch w-full">
            <div className="flex flex-col md:justify-between items-stretch">
              <h2 className="text-lg font-medium px-1 md:text-xl">
                {sidedish.name}
              </h2>
              <p className="text-normal text-sm p-1 text-balance md:text-base ">
                {sidedish.details}
              </p>
            </div>

            <p className="text-end m-2 font-medium">{sidedish.price}</p>
          </div>
        </section>
      ))}
    </>
  );
}

export default Sidedishes;
