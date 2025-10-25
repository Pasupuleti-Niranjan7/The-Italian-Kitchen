let Mainmenu = () => {
  // Main menu items
  let mainmenu = [
    {
      id: 1,
      img: "/public/menu1.jpg",
      name: "Pizza Margherita",
      details:
        "Classic Neapolitan pizza topped with fresh mozzarella, basil, and San Marzano tomatoes.",
      price: "$13.50",
    },
    {
      id: 2,
      img: "/public/menu2.jpg",
      name: "Pizza Quattro Formaggi",
      details:
        "A rich blend of mozzarella, Gorgonzola, Parmesan, and Fontina cheeses.",
      price: "$14.95",
    },
    {
      id: 3,
      img: "/public/menu3.jpg",
      name: "Pizza Prosciutto e Rucola",
      details:
        "Thin-crust pizza topped with prosciutto, fresh arugula, and shaved Parmesan.",
      price: "$15.95",
    },
    {
      id: 4,
      img: "/public/menu4.jpg",
      name: "Spaghetti Carbonara",
      details:
        "Traditional Roman pasta dish with creamy egg sauce, pancetta, Pecorino Romano cheese, and black pepper.",
      price: "$14.95",
    },
    {
      id: 5,
      img: "/public/menu5.jpg",
      name: "Penne Arrabbiata",
      details:
        "Spicy tomato sauce with garlic, chili peppers, and fresh parsley.",
      price: "$13.95",
    },
    {
      id: 6,
      img: "/public/menu6.jpg",
      name: "Fettuccine Alfredo",
      details:
        "Creamy Alfredo sauce with Parmesan cheese and a touch of nutmeg.",
      price: "$15.95",
    },
    {
      id: 7,
      img: "/public/menu7.jpg",
      name: "Pollo alla Parmigiana",
      details:
        "Breaded chicken breast topped with marinara sauce and melted mozzarella, served with a side of pasta.",
      price: "$17.95",
    },
    {
      id: 8,
      img: "/public/menu8.jpg",
      name: "Seafood Paella",
      details:
        "A delightful mix of Arborio rice, shrimp, mussels, clams, and calamari, cooked with saffron and fresh herbs.",
      price: "$18.95",
    },
  ];

  return (
    <>
    {/* Main menu section */}
      {mainmenu.map((dish) => (
        <section
          key={dish.id}
          className="flex flex-col md:flex-row gap-2 bg-white shadow-[0_0_1px_2px_#f0f0f0] my-5 md:pr-4 md:w-[750px] lg:w-[900px] xl:w-[1000px] 2xl:w-[1200px] rounded-md"
        >
          <img
            src={dish.img}
            alt=""
            className="h-[290px] w-[590px] sm:w-[700px] sm:h-[300px] md:h-[120px] md:w-[200px] p-1"
          />
          <div className="max-sm:mt-3 md:mt-5 flex flex-col items-stretch w-full">
            <div className="flex flex-col md:justify-between items-start">
              <h2 className="text-lg font-medium px-1 md:text-xl">
                {dish.name}
              </h2>
              <p className="text-normal text-sm p-1 text-balance md:text-base md:pr-5">
                {dish.details}
              </p>
            </div>
            <p className="text-end m-2 font-medium">{dish.price}</p>
          </div>
        </section>
      ))}
    </>
  );
};

export default Mainmenu;
