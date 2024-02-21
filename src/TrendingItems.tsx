import { Trending } from "./api";
import Item from "./Recipe";

export default function TrendingItems({trendingRecipes}:{trendingRecipes:Trending[]}) {
    const recipes = trendingRecipes.map(recipe => {
        return <Item key={recipe.document_id} recipe={recipe}/>
    })
    return (
        <div className="container">
            <ul>
                {recipes}
            </ul>
        </div>
    )
}