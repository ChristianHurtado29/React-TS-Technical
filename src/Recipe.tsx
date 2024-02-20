import { Trending } from "./api";

export default function Recipe({recipe}:{recipe: Trending}) {
    const rating = recipe.rating.attributes.userRatingsCount ? recipe.rating.attributes.userRatingsCount : 0;
    return (
        <div>
            <h2>Name: {recipe.title}</h2>
            <h3>User Rating: {rating}</h3>
        </div>
    )
}