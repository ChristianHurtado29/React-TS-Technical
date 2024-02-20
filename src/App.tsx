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

  const handleNameUpdate=(field: keyof typeof name, newName: string) => {
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
        {trendingRecipes ? <TrendingItems trendingRecipes={trendingRecipes}/> : <div>sorry no recipes at the moment</div>}
        {/* Render a component here that renders a list of trending items from the getTrending api function.
         Display the title and userRatingsCount (Default the userRatingsCount to 0 if the field is null or missing in the api response) 
         */}
      </div>
 
  );
}

export default App;
