import { useQuery, gql, useLazyQuery, useMutation } from "@apollo/client";
import { useState } from "react";

const QUERY_ALL_RECIPES = gql`
  query GetAllRecipes {
    recipes {
      id
      title
      description
      createdAt
      originalURL
      dietaryRestrictions
      ingredients {
        name
      }
    }
  }
`;

const QUERY_All_RECIPE_REVIEWS = gql`
  query GetRecipeReview {
    recipeReviews {
      id
      date
      comment
      rating
      recipeId
      userId
    }
  }
`;

const GET_RECIPE_REVIEW = gql`
  query recipeReview($rating: Int!) {
    recipeReview(rating: $rating) {
      rating
      userId
      comment
      id
    }
  }
`;

const ADD_RECIPE = gql`
  mutation AddRecipeInput($input: AddRecipeInput!) {
    addRecipe(input: $input) {
      id
      title
      description
      createdAt
      originalURL
      dietaryRestrictions
    }
  }
`;
const PopulateDate = () => {
  const { data, loading, error } = useQuery(QUERY_ALL_RECIPES);
  const { data: recipeReviewData } = useQuery(QUERY_All_RECIPE_REVIEWS);
  const [fetchReview, { data: ReviewData, error: ReviewFetchError }] =
    useLazyQuery(GET_RECIPE_REVIEW);

  const [rating, setRating] = useState("");

  //add recipe state
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [originalURL, setOriginalURL] = useState("");
  const [dietaryRestrictions, setDietaryRestrictions] = useState("");

  const [addRecipe] = useMutation(ADD_RECIPE);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>Error</h1>;
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Recipe title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipe desc"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipe createdAt"
          onChange={(e) => setCreatedAt(e.target.value)}
        />
        <input
          type="text"
          placeholder="Recipe url"
          onChange={(e) => setOriginalURL(e.target.value)}
        />

        <select onChange={(e) => setDietaryRestrictions(e.target.value)}>
          <option value="VEGETARIAN">Other</option>
          <option value="NON_VEGETARIAN">Vegan</option>
        </select>

        <button
          onClick={() => {
            addRecipe({
              variables: {
                input: {
                  title,
                  description,
                  createdAt,
                  originalURL,
                  dietaryRestrictions,
                },
              },
            });
          }}
        >
          Add Recipe
        </button>
      </div>{" "}
      {data &&
        data.recipes.map((recipe: any) => {
          return (
            <div>
              <h1>{recipe.title}</h1>
              <p>{recipe.description}</p>
              <p>{recipe.createdAt}</p>

              <a href={recipe.originalURL}>{recipe.originalURL}</a>
              <ul>
                {recipe.ingredients.map((ingredient: any) => {
                  return <li>{ingredient.name}</li>;
                })}
              </ul>
            </div>
          );
        })}
      {recipeReviewData &&
        recipeReviewData.recipeReviews.map((recipeReview: any) => {
          return (
            <div>
              <h1>{recipeReview.rating}</h1>
              <p>{recipeReview.comment}</p>
              <p>{recipeReview.date}</p>
              <p>{recipeReview.recipeId}</p>
              <p>{recipeReview.userId}</p>
            </div>
          );
        })}
      <div>
        <input
          type="text"
          placeholder="5"
          onChange={(e) => setRating(e.target.value)}
        />
        <button
          onClick={() => {
            fetchReview({
              variables: {
                rating: parseInt(rating),
              },
            });
          }}
        >
          {" "}
          fetch data for rating
        </button>
        <div>
          {ReviewData && (
            <div>
              <h1>{ReviewData.recipeReview.rating}</h1>
              <p>{ReviewData.recipeReview.comment}</p>
              <p>{ReviewData.recipeReview.id}</p>
            </div>
          )}
          {ReviewFetchError && (
            <div>
              <h1>NO DATA FOUND</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopulateDate;
