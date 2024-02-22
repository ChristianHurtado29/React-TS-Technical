import { useEffect, useState } from "react";
import ContentContainer from "./ContentContainer";
import { Trending, getTrending } from "./api";
import TrendingItems from "./TrendingItems";

export type Name = {first: string, last: string}

function App() {
  const [name, setName] = useState({
    first: "",
    last: "",
  });
  const [trendingRecipes, setTrendingRecipes] = useState<Trending[] | false>()

  /*
  - The form input is not updating can you explain why?
    
    There was an error with the text input because of the way we were previously handling
    handleNameUpdates, within we were using setName incorrectly by attempting to directly manipulate
    the state which would not work in React because React would not be properly notified that the state was changed
    and therefore cause unwanted errors. It is best to copy the state(name) and use the spread operator and using 
    the field variable to represent either first/last which would be appropriately updating the value
    of the text input.
  */
  const handleNameUpdate = (field: keyof typeof name, newName: string) => {
    setName({...name, [field]:newName})
  }

  useEffect(() => {
    const fetchTrending = async () => {
      const trending = await getTrending()
      setTrendingRecipes(trending)
    } 
    fetchTrending()
   }, [])

  return (
      <div className="container">
        <h5>App</h5>
        <ContentContainer handleNameUpdate={handleNameUpdate} name={name} />
        {/* Render a component here that renders a list of trending items from the getTrending api function.
         Display the title and userRatingsCount (Default the userRatingsCount to 0 if the field is null or missing in the api response) 
         */
         /* below I decided to use a ternary operator to check for trendingRecipes to be a truthy value to then decide whether to show
         my TrendingItems component or an error message in the div*/
         }
        {trendingRecipes ? <TrendingItems trendingRecipes={trendingRecipes}/> : <div>sorry no recipes at the moment</div>}
      </div>
  );
}

export default App;
