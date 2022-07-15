import HomeStyle from "./Home.style";
import axios from "axios";
import { useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "TeaTime"];
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState("");

  const APP_ID = "05ffca8e";
  const APP_KEY = "e8a3992fdde40b759ecdb5d9c39147a4";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      // console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(recipes);
  return (
    <div>
      <Header
        setQuery={setQuery}
        setSelectedMeal={setSelectedMeal}
        mealType={mealType}
        getData={getData}
      />
    </div>
  );
};

export default Home;
