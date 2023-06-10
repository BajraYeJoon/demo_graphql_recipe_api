const { gql } = require("apollo-server");

const typeDefs = gql`
  type Recipe {
    id: ID!
    title: String!
    description: String!
    createdAt: String!
    originalURL: String!
    ingredients: [Ingredients!]!
    dietaryRestrictions: DietaryRestrictions!
    relatedRecipes: [Recipe]
    recipeInstruction: [RecipeInstruction]
  }

  type RecipeInstruction {
    id: ID!
    title: String!
    instructions: String!
    isDifficult: Boolean!
  }

  type Ingredients {
    name: String!
    quantity: String!
  }

  type RecipeReview {
    id: ID!
    recipeId: ID!
    rating: Int!
    comment: String!
    date: String!
    userId: ID!
  }

  type Query {
    recipes: [Recipe!]!
    recipe(id: ID!): Recipe!
    recipeReviews: [RecipeReview!]!
    recipeReview(rating: Int!): RecipeReview!
  }
  input AddRecipeInput {
    title: String!
    description: String!
    createdAt: String!
    originalURL: String = "https://examplerecipeurl.com"
    dietaryRestrictions: DietaryRestrictions = Other
  }

  input UpdateRecipeTitleInput {
    id: ID!
    newTitle: String!
  }

  type Mutation {
    addRecipe(input: AddRecipeInput!): Recipe!
    updateRecipeTitle(input: UpdateRecipeTitleInput!): Recipe
    deleteRecipe(id: ID!): Recipe
  }

  enum DietaryRestrictions {
    VEGETARIAN
    NON_VEGETARIAN
  }
`;

module.exports = { typeDefs };
