import useHttp from "../hooks/useHttp";
import MealItems from "./MealItems";
import Error from "./UI/Error";
const requestConfig = {};
export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);
  if (isLoading) {
    return <p className="center">Fetching Meals....</p>;
  }
  if (error) {
    return <Error title="Field to fetch Meals" message={error} />;
  }
  return (
    <ul id="meals">
      {loadedMeals.map((meal) => (
        <MealItems meal={meal} key={meal.id} />
      ))}
    </ul>
  );
}
