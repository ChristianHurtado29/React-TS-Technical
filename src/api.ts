// Can we consolidate this typing?
export interface Trending  {
  document_id: number;
  count: number;
  document_type: string;
  title: string;
  rating: Rating
}

/*
  previously there were two types (models) that represented a complete and incomplete rating.
  they shared every attribute in common and therefore it was unnecessary to have both. We could
  reduce both to just one type called Rating that could be used in their place.
*/
type Rating = {
  attributes: {
    avgScore: number | undefined;
    rateableId: number | undefined;
    rateableType: string | undefined;
    userRatingsCount: number | undefined;
  }
}


/*
  - When it comes to the getTrending api response think about how to account for both a successful and unsuccessul/error/empty response.

  for this task I thought it best practice to use a try...catch statement for error handing. This seemed the best way
  to handle any api errors we could possibly receive from our getTrending call. Tim helped me clean up the try...catch to
  return false if the api call was unsuccessful as opposed to having it throw an error only. With a further iteration I would 
  build an error component to reflect to the user and not just notifying the dev
*/
export const getTrending = async (): Promise<Trending[] | false> => {
  try {
    const response = await fetch('https://speak-easy-staging.herokuapp.com/api/analytics/trending/atk');
    if(!response.ok) {
      throw new Error('invalid response from api call')
    }
    const trending = await response.json()
    return trending as Trending[]
  }
 catch(err) {
  window.alert('sorry bad api response')
  console.log(err);
  return false
 }
}