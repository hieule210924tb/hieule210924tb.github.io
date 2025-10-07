const categories = [
  "Pizza",
  "Breakfast",
  "Japanese",
  "Halal",
  "Dessert",
  "Lebanese",
  "American",
  "Sushi",
  "Greek",
  "Thai",
  "Vegetarian",
  "Italian",
  "Mexican",
  "Indian",
  "Chinese",
  "Breakfast",
  "Burgers",
];

const FoodCategories = () => {
  return (
    <div className="foodCategories mt-20">
      <div className="max-w-[1170px] mx-auto">
        <h2 className="text-center text-[#0f2137] text-[26px] font-bold  ">
          Popular categories by food
        </h2>
        <div className="flex gap-5 flex-wrap justify-center mt-10">
          {categories.map((item, index) => (
            <span
              key={index}
              className="bg-[#f4f7fb] text-[#0d1c2e] py-[10px] px-[18px] rounded-[20px] 
              text-[16px] font-medium cursor-pointer transition-all duration-300 ease-in-out
              hover:bg-[#00cc99]  hover:text-white  hover:transition-colors hover:duration-100 hover:ease-in">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodCategories;
